export default function Stat() {
  return (
    <section className="py-16 bg-blue-950 text-white">
      <div className="w-full mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight mb-6 text-center text-white">
          Penyakit Huntington: Perspektif Historis
        </h2>
        <p className="text-lg text-blue-100 mb-12 text-center -mt-4">
          Memahami dampak global dan tren historis dari penyakit Huntington
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-blue-800 p-6 rounded-lg text-center shadow-md">
            <div className="text-3xl font-bold mb-2">1872</div>
            <div className="text-sm text-blue-100">
              Tahun pertama kali dijelaskan oleh George Huntington
            </div>
          </div>
          <div className="bg-blue-800 p-6 rounded-lg text-center shadow-md">
            <div className="text-3xl font-bold mb-2">1993</div>
            <div className="text-sm text-blue-100">Tahun penemuan gen HTT</div>
          </div>
          <div className="bg-blue-800 p-6 rounded-lg text-center shadow-md">
            <div className="text-3xl font-bold mb-2">30rb</div>
            <div className="text-sm text-blue-100">
              Perkiraan jumlah kasus di Amerika Serikat
            </div>
          </div>
          <div className="bg-blue-800 p-6 rounded-lg text-center shadow-md">
            <div className="text-3xl font-bold mb-2">150rb</div>
            <div className="text-sm text-blue-100">
              Orang yang berisiko di Amerika Serikat
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Garis Waktu Historis
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 pb-8 border-l-2 border-blue-300 last:border-l-0">
              <div className="absolute w-4 h-4 bg-white border-4 border-blue-500 rounded-full -left-[9px] top-0"></div>
              <div className="bg-blue-800 p-4 rounded-lg shadow-md">
                <div className="font-bold text-blue-100 mb-2">1872</div>
                <p className="text-blue-100">
                  George Huntington menerbitkan "On Chorea" yang menggambarkan
                  penyakit yang kemudian dinamai berdasarkan namanya.
                </p>
              </div>
            </div>
            <div className="relative pl-8 pb-8 border-l-2 border-blue-300 last:border-l-0">
              <div className="absolute w-4 h-4 bg-white border-4 border-blue-500 rounded-full -left-[9px] top-0"></div>
              <div className="bg-blue-800 p-4 rounded-lg shadow-md">
                <div className="font-bold text-blue-100 mb-2">1950-an</div>
                <p className="text-blue-100">
                  Studi prevalensi dimulai, mengungkap tingkat tinggi di
                  populasi tertentu seperti wilayah Danau Maracaibo di
                  Venezuela.
                </p>
              </div>
            </div>
            <div className="relative pl-8 pb-8 border-l-2 border-blue-300 last:border-l-0">
              <div className="absolute w-4 h-4 bg-white border-4 border-blue-500 rounded-full -left-[9px] top-0"></div>
              <div className="bg-blue-800 p-4 rounded-lg shadow-md">
                <div className="font-bold text-blue-100 mb-2">1983</div>
                <p className="text-blue-100">
                  Penanda genetik untuk penyakit Huntington ditemukan pada
                  kromosom 4, memungkinkan tes prediktif pertama.
                </p>
              </div>
            </div>
            <div className="relative pl-8 pb-8 border-l-2 border-blue-300 last:border-l-0">
              <div className="absolute w-4 h-4 bg-white border-4 border-blue-500 rounded-full -left-[9px] top-0"></div>
              <div className="bg-blue-800 p-4 rounded-lg shadow-md">
                <div className="font-bold text-blue-100 mb-2">1993</div>
                <p className="text-blue-100">
                  Gen HTT dan mutasi pengulangan CAG diidentifikasi sebagai
                  penyebab penyakit Huntington.
                </p>
              </div>
            </div>
            <div className="relative pl-8 pb-8 border-l-2 border-blue-300 last:border-l-0">
              <div className="absolute w-4 h-4 bg-white border-4 border-blue-500 rounded-full -left-[9px] top-0"></div>
              <div className="bg-blue-800 p-4 rounded-lg shadow-md">
                <div className="font-bold text-blue-100 mb-2">2000-an</div>
                <p className="text-blue-100">
                  Studi prevalensi global menunjukkan variasi geografis yang
                  signifikan: 5–10 per 100.000 di negara Barat, lebih rendah di
                  Jepang dan Asia Timur lainnya.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            Distribusi Geografis
          </h3>
          <p className="text-center text-blue-100 max-w-3xl mx-auto mb-8">
            Penyakit Huntington menunjukkan variasi geografis yang signifikan
            dalam prevalensi, dengan beberapa wilayah memiliki tingkat yang jauh
            lebih tinggi akibat efek pendiri dan isolasi genetik.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-3 text-white">
                Danau Maracaibo, Venezuela
              </h4>
              <p className="text-blue-100">
                Konsentrasi tertinggi di dunia, dengan sekitar 700 per 100.000
                orang terdampak, yang ditelusuri berasal dari satu leluhur pada
                awal 1800-an.
              </p>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-3 text-white">Eropa Barat</h4>
              <p className="text-blue-100">
                Prevalensi 5–10 per 100.000, dengan tingkat lebih tinggi di
                beberapa komunitas terpencil seperti di Skotlandia, Wales, dan
                Swedia.
              </p>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-3 text-white">
                Jepang dan Asia Timur
              </h4>
              <p className="text-blue-100">
                Prevalensi jauh lebih rendah yaitu 0,1–0,5 per 100.000,
                menunjukkan latar belakang genetik atau efek pendiri yang
                berbeda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
