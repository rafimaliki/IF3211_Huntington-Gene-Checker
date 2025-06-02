//@ts-nocheck

import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-slate-100">
      <div className=" w-[95%] py-12 md:py-16 bg-white rounded-md shadow-sm">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center px-4 md:px-8">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl md:text-5xl">
              Memahami Penyakit Huntington Melalui Analisis DNA
            </h1>
            <p className="text-base sm:text-lg text-slate-600">
              Pelajari tentang urutan DNA dan bagaimana pengulangan CAG dapat
              menunjukkan risiko penyakit Huntington.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/checker"
                className="inline-flex items-center justify-center rounded-md bg-blue-900 px-6 py-3 text-base font-medium text-white hover:bg-blue-950 transition-colors"
              >
                Coba Alat Pemeriksa <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                to="#learn-more"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-blue-900 border border-blue-900 hover:bg-blue-50 transition-colors"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gray-200 rounded-lg overflow-hidden"
              aria-label="DNA double helix placeholder"
            >
              <Spline scene="https://prod.spline.design/FXwCPTpluBHZ3leo/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
