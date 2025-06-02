import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_secondary/about/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-blue-900">
        Tentang Analisis DNA Penyakit Huntington
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">
          Apa itu Penyakit Huntington?
        </h2>
        <p className="mb-4 text-slate-700">
          Penyakit Huntington (HD) adalah gangguan otak progresif yang
          menyebabkan gerakan tak terkendali, masalah emosional, dan hilangnya
          kemampuan berpikir. Penyakit ini disebabkan oleh mutasi pada gen HTT,
          yang memberikan instruksi untuk membuat protein bernama huntingtin.
        </p>
        <p className="mb-4 text-slate-700">
          Mutasi penyebab HD melibatkan segmen DNA yang dikenal sebagai
          pengulangan trinukleotida CAG. Biasanya, segmen ini diulang sebanyak
          10 hingga 35 kali dalam gen tersebut. Pada penderita HD, segmen CAG
          ini diulang 36 kali atau lebih.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">
          Hubungan Pengulangan CAG dengan Penyakit Huntington
        </h2>
        <p className="mb-4 text-slate-700">
          Jumlah pengulangan CAG dalam gen HTT menentukan apakah seseorang akan
          mengembangkan HD dan pada usia berapa gejala mulai muncul:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-700">
          <li>
            <strong>10-26 pengulangan:</strong> Rentang normal, tidak terkait
            dengan HD.
          </li>
          <li>
            <strong>27-35 pengulangan:</strong> Rentang menengah, tidak terkait
            dengan penyakit tetapi dapat meningkat pada generasi berikutnya.
          </li>
          <li>
            <strong>36-39 pengulangan:</strong> Penetransi berkurang, mungkin
            muncul gejala atau tidak.
          </li>
          <li>
            <strong>40+ pengulangan:</strong> Penetransi penuh, akan
            mengembangkan HD jika menjalani masa hidup normal.
          </li>
        </ul>
        <p className="mb-4 text-slate-700">
          Secara umum, semakin banyak pengulangan, semakin dini gejala muncul
          dan semakin parah perjalanan penyakitnya.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">
          Tentang Alat Analisis DNA Kami
        </h2>
        <p className="mb-4 text-slate-700">
          Alat Analisis DNA kami dirancang untuk tujuan edukasi guna membantu
          memahami bagaimana pengulangan CAG dalam gen HTT dianalisis dan
          diinterpretasikan. Alat ini:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-700">
          <li>Menerima file urutan DNA dalam format umum (.txt, .fa)</li>
          <li>Mengidentifikasi pengulangan CAG dalam urutan DNA</li>
          <li>Menghitung jumlah pengulangan CAG secara berurutan</li>
          <li>
            Memberikan interpretasi berdasarkan pedoman klinis yang telah
            ditetapkan
          </li>
        </ul>
        <p className="mb-4 text-slate-700">
          <strong>Catatan Penting:</strong> Alat ini hanya untuk tujuan edukasi
          dan tidak boleh digunakan untuk diagnosis klinis. Pemeriksaan genetik
          yang tepat untuk penyakit Huntington harus dilakukan oleh tenaga medis
          yang berkualifikasi di lingkungan klinis, disertai dengan konseling
          genetik yang sesuai.
        </p>
      </section>
    </div>
  )
}
