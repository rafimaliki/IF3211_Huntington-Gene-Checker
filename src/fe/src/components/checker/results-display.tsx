import { AlertCircle } from 'lucide-react'

interface AnalysisResult {
  cagCount: number
  risk: string
}

interface ResultsDisplayProps {
  results: AnalysisResult
  onReset: () => void
}

export default function ResultsDisplay({
  results,
  onReset,
}: ResultsDisplayProps) {
  // Extract label and message from backend response
  const riskMessage = results.risk
  const labelMatch = riskMessage.match(/\[(.*?)\]/)
  const label = labelMatch ? labelMatch[1] : "Unknown"

  // Determine risk color based on label
  const riskColor = {
    "NORMAL": "text-green-600",
    "KARIER": "text-amber-600",
    "PENETRASI TIDAK LENGKAP": "text-orange-600",
    "PENETRASI PENUH": "text-red-600",
  }[label] || "text-slate-600"

  return (
    <div className="border-t border-slate-200 pt-6">
      <h3 className="text-xl font-bold mb-4">Hasil Analisis</h3>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between py-2 border-b border-slate-100">
          <span className="text-slate-600">Jumlah Pengulangan CAG:</span>
          <span className="font-medium">{results.cagCount}</span>
        </div>
        <div className="py-2">
          <span className="text-slate-600 block mb-1">Penilaian Risiko:</span>
          <p className={`font-medium ${riskColor}`}>{riskMessage}</p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6">
        <div className="flex">
          <AlertCircle
            size={20}
            className="text-amber-600 mr-3 flex-shrink-0 mt-0.5"
          />
          <div>
            <h4 className="font-semibold text-amber-800 mb-1">
              Catatan Penting
            </h4>
            <p className="text-sm text-amber-700">
              Analisis ini hanya untuk tujuan edukatif dan tidak boleh digunakan
              untuk diagnosis klinis. Harap konsultasikan dengan tenaga medis
              profesional untuk pengujian genetik dan konseling yang tepat.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-900 border border-blue-900 hover:bg-blue-50 transition-colors"
          onClick={onReset}
        >
          Analisis Ulang
        </button>
      </div>
    </div>
  )
}