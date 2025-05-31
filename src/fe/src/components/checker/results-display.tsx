import { AlertCircle } from 'lucide-react'

interface AnalysisResult {
  cagCount: number
  risk: string
  description: string
}

interface ResultsDisplayProps {
  results: AnalysisResult
  onReset: () => void
}

export default function ResultsDisplay({
  results,
  onReset,
}: ResultsDisplayProps) {
  return (
    <div className="border-t border-slate-200 pt-6">
      <h3 className="text-xl font-bold mb-4">Analysis Results</h3>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between py-2 border-b border-slate-100">
          <span className="text-slate-600">CAG Repeat Count:</span>
          <span className="font-medium">{results.cagCount}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-slate-100">
          <span className="text-slate-600">Risk Assessment:</span>
          <span
            className={`font-medium ${
              results.risk === 'Normal'
                ? 'text-green-600'
                : results.risk === 'Intermediate'
                  ? 'text-amber-600'
                  : results.risk === 'Reduced Penetrance'
                    ? 'text-orange-600'
                    : 'text-red-600'
            }`}
          >
            {results.risk}
          </span>
        </div>
      </div>
      <p className="text-sm text-slate-700 mb-6">{results.description}</p>

      <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6">
        <div className="flex">
          <AlertCircle
            size={20}
            className="text-amber-600 mr-3 flex-shrink-0 mt-0.5"
          />
          <div>
            <h4 className="font-semibold text-amber-800 mb-1">
              Important Note
            </h4>
            <p className="text-sm text-amber-700">
              This analysis is for educational purposes only and should not be
              used for clinical diagnosis. Please consult with a healthcare
              professional for proper genetic testing and counseling.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-900 border border-blue-900 hover:bg-blue-50 transition-colors"
          onClick={onReset}
        >
          Analyze Another Sequence
        </button>
      </div>
    </div>
  )
}
