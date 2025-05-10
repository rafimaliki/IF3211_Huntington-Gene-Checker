import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

export default function Table() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight mb-6 text-center text-blue-900">
          Understanding CAG Repeats
        </h2>
        <p className="text-lg text-slate-600 mb-12 text-center -mt-4">
          The number of CAG repeats in the HTT gene determines the likelihood of
          developing Huntington's disease.
        </p>

        <div className="overflow-hidden rounded-lg shadow-md mx-auto max-w-4xl">
          <div className="bg-blue-900 text-white px-4 py-3">
            <h3 className="font-medium">CAG Repeat Count and Disease Risk</h3>
          </div>
          <div className="overflow-x-auto bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-slate-50">
                  <th className="px-4 py-3 text-left font-medium text-slate-700">
                    CAG Repeat Count
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">
                    Interpretation
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-slate-50">
                  <td className="px-4 py-3">10-26 repeats</td>
                  <td className="px-4 py-3">Normal range</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="px-4 py-3">27-35 repeats</td>
                  <td className="px-4 py-3">
                    Intermediate range (not associated with disease but may
                    expand in future generations)
                  </td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="px-4 py-3">36-39 repeats</td>
                  <td className="px-4 py-3">
                    Reduced penetrance (may or may not develop symptoms)
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3">40+ repeats</td>
                  <td className="px-4 py-3">
                    Full penetrance (will develop Huntington's disease if they
                    live a normal lifespan)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-slate-600 mb-6">
            The higher the number of CAG repeats, the earlier the onset of
            symptoms and the more severe the course of the disease.
          </p>
          <Link
            to="/checker"
            className="inline-flex items-center justify-center rounded-md bg-blue-900 px-6 py-3 text-base font-medium text-white hover:bg-blue-950 transition-colors"
          >
            Start Analyzing DNA Sequence{' '}
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
