//@ts-nocheck

import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-slate-100">
      <div className=" w-[95%] py-12 md:py-16 bg-white rounded-md shadow-sm">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center px-4 md:px-8">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl md:text-5xl">
              Understanding Huntington's Disease Through DNA Analysis
            </h1>
            <p className="text-base sm:text-lg text-slate-600">
              Learn about DNA sequences and how CAG repeats can indicate the
              risk of Huntington's disease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/checker"
                className="inline-flex items-center justify-center rounded-md bg-blue-900 px-6 py-3 text-base font-medium text-white hover:bg-blue-950 transition-colors"
              >
                Try the Checker Tool <ArrowRight size={16} className="ml-2" />
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
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gray-200 rounded-lg shadow-lg"
              aria-label="DNA double helix placeholder"
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
