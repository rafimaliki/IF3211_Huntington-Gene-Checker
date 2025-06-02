import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

export default function Table() {
  return (
    <section className="py-16 bg-white">
      <div className="w-full mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight mb-6 text-center text-blue-900">
          Memahami Ulangan CAG
        </h2>
        <p className="text-lg text-slate-600 mb-12 text-center -mt-4">
          Jumlah ulangan CAG dalam gen HTT menentukan kemungkinan seseorang
          mengembangkan penyakit Huntington.
        </p>

        <div className="overflow-hidden rounded-lg shadow-md mx-auto max-w-4xl">
          <div className="bg-blue-900 text-white px-4 py-3">
            <h3 className="font-medium">
              Jumlah Ulangan CAG dan Risiko Penyakit
            </h3>
          </div>
          <div className="overflow-x-auto bg-white">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-slate-50">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 w-55">
                    Jumlah Ulangan CAG
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">
                    Interpretasi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-slate-50">
                  <td className="px-4 py-3">10–26 ulangan</td>
                  <td className="px-4 py-3">Rentang normal (tidak berisiko)</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="px-4 py-3">27–35 ulangan</td>
                  <td className="px-4 py-3">
                    Rentang menengah (tidak menyebabkan penyakit, tetapi dapat
                    meningkat pada generasi berikutnya)
                  </td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="px-4 py-3">36–39 ulangan</td>
                  <td className="px-4 py-3">
                    Penetrasi berkurang (gejala bisa muncul atau tidak)
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3">40+ ulangan</td>
                  <td className="px-4 py-3">
                    Penetrasi penuh (pasti akan mengembangkan penyakit
                    Huntington jika hidup cukup lama)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-slate-600 mb-6">
            Semakin tinggi jumlah ulangan CAG, semakin awal gejala muncul dan
            semakin berat perjalanan penyakitnya.
          </p>
          <Link
            to="/checker"
            className="inline-flex items-center justify-center rounded-md bg-blue-900 px-6 py-3 text-base font-medium text-white hover:bg-blue-950 transition-colors"
          >
            Mulai Periksa Urutan DNA <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
