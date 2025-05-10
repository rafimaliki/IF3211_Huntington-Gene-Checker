//@ts-nocheck

import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-16 bg-white w-[95%]">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-blue-900 md:text-5xl">
              Understanding Huntington's Disease Through DNA Analysis
            </h1>
            <p className="text-lg text-slate-600">
              Learn about DNA sequences and how CAG repeats can indicate the
              risk of Huntington's disease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/checker"
                className="inline-flex items-center justify-center rounded-md bg-blue-900 px-6 py-3 text-base font-medium text-white hover:bg-blue-950 transition-colors"
              >
                Try the Analyzer Tool <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                to="#learn-more"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-blue-900 border border-blue-900 hover:bg-blue-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div
              className="w-96 h-96 bg-gray-200 rounded-lg shadow-lg"
              aria-label="DNA double helix placeholder"
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
