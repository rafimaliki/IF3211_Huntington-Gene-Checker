import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { AlertCircle } from 'lucide-react'
import FileUploader from '@/components/checker/file-uploader'
import ResultsDisplay from '@/components/checker/results-display'

export const Route = createFileRoute('/_secondary/checker/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [dnaSequence, setDnaSequence] = useState<string | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [results, setResults] = useState<{
    cagCount: number
    risk: string
  } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [showResults, setShowResults] = useState(false)

  const handleFileRead = (content: string) => {
    setDnaSequence(content)
    setError(null)
    setShowResults(false)
  }

  const handleError = (message: string) => {
    setError(message)
  }

  const analyzeDNA = async () => {
    setAnalyzing(true)

    try {
      if (!dnaSequence) {
        setError('No DNA sequence found. Please upload a file first.')
        setAnalyzing(false)
        return
      }

      const cleanedSequence = dnaSequence.toUpperCase().replace(/[^ATGC]/g, '')

      const response = await fetch('http://127.0.0.1:8000/cag_repeats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dna_sequence: cleanedSequence }),
      })

      if (!response.ok) {
        throw new Error('API call failed.')
      }

      const data = await response.json()

      setResults({
        cagCount: data.max_repeats,
        risk: data.risk,
      })
      setShowResults(true)
    } catch (err) {
      setError(
        'An error occurred during analysis. Please check your DNA sequence file or try again later.',
      )
    } finally {
      setAnalyzing(false)
    }
  }

  const resetAnalyzer = () => {
    setDnaSequence(null)
    setResults(null)
    setShowResults(false)
    setError(null)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-blue-900">
        Alat Pemeriksa DNA untuk Risiko Penyakit Huntington
      </h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b border-slate-200 p-6">
          <h2 className="text-xl font-bold text-blue-800 mb-1">
            Unggah Sekuens DNA
          </h2>
          <p className="text-sm text-slate-600">
            Unggah file teks yang berisi sekuens DNA untuk dianalisis risiko
            penyakit Huntington.
          </p>
        </div>
        <div className="p-6">
          {!dnaSequence ? (
            <FileUploader onFileRead={handleFileRead} onError={handleError} />
          ) : (
            <div className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4">
                  <div className="flex">
                    <AlertCircle
                      size={20}
                      className="text-red-600 mr-3 flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-1">Error</h4>
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              {!showResults && !analyzing && (
                <button
                  onClick={analyzeDNA}
                  className="inline-flex items-center justify-center rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-950 transition-colors w-full"
                >
                  Tampilkan Hasil
                </button>
              )}

              {analyzing && (
                <div className="text-center py-4">
                  <p className="text-slate-600 mb-3">
                    Memeriksa sekuens DNA Anda...
                  </p>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full w-[45%]"></div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {showResults && results && (
          <div className="p-6 border-t border-slate-200">
            <ResultsDisplay results={results} onReset={resetAnalyzer} />
          </div>
        )}
      </div>
    </div>
  )
}
