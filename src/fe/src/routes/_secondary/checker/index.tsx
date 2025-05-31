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
    description: string
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

  const analyzeDNA = () => {
    setAnalyzing(true)

    setTimeout(() => {
      try {
        if (!dnaSequence) {
          setError('No DNA sequence found. Please upload a file first.')
          setAnalyzing(false)
          return
        }

        const cleanedSequence = dnaSequence
          .toUpperCase()
          .replace(/[^ATGC]/g, '')

        const cagRegex = /(?:CAG)+/g
        const matches = cleanedSequence.match(cagRegex)

        if (!matches) {
          setError('No CAG repeats found in the DNA sequence.')
          setAnalyzing(false)
          return
        }

        let longestRepeat = ''
        for (const match of matches) {
          if (match.length > longestRepeat.length) {
            longestRepeat = match
          }
        }

        const cagCount = longestRepeat.length / 3

        let risk = ''
        let description = ''

        if (cagCount <= 26) {
          risk = 'Normal'
          description =
            "The number of CAG repeats is within the normal range. This is not associated with Huntington's disease."
        } else if (cagCount <= 35) {
          risk = 'Intermediate'
          description =
            'The number of CAG repeats is in the intermediate range. This is not associated with disease but may expand in future generations.'
        } else if (cagCount <= 39) {
          risk = 'Reduced Penetrance'
          description =
            "The number of CAG repeats indicates reduced penetrance. The individual may or may not develop symptoms of Huntington's disease."
        } else {
          risk = 'Full Penetrance'
          description =
            "The number of CAG repeats indicates full penetrance. The individual will develop Huntington's disease if they live a normal lifespan."
        }

        setResults({ cagCount, risk, description })
        setShowResults(true)
      } catch (err) {
        setError(
          'An error occurred during analysis. Please check your DNA sequence file format.',
        )
      } finally {
        setAnalyzing(false)
      }
    }, 2000)
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
        Huntington's Disease DNA Analyzer
      </h1>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b border-slate-200 p-6">
          <h2 className="text-xl font-bold text-blue-800 mb-1">
            Upload DNA Sequence
          </h2>
          <p className="text-sm text-slate-600">
            Upload a text file containing a DNA sequence to analyze for
            Huntington's disease risk.
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
                  Show Results
                </button>
              )}

              {analyzing && (
                <div className="text-center py-4">
                  <p className="text-slate-600 mb-3">
                    Analyzing DNA sequence...
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
