import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function InfoCards() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])

  const cardVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
        duration: 0.7,
        ease: 'easeOut',
      },
    }),
  }

  return (
    <section id="learn-more" className="py-16 bg-slate-100" ref={ref}>
      <div className="w-full mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-6 text-center text-blue-900">
          Apa Itu Penyakit Huntington?
        </h2>
        <p className="text-lg text-slate-600 mb-12 text-center -mt-4">
          Penyakit Huntington adalah gangguan otak progresif yang disebabkan
          oleh mutasi genetik.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-[95%] mx-auto ">
          {[
            {
              title: 'Dasar Genetik',
              description:
                'Penyakit Huntington disebabkan oleh mutasi pada gen HTT, yang memberikan instruksi untuk membuat protein bernama huntingtin.',
            },
            {
              title: 'Pengulangan CAG',
              description:
                'Mutasi ini melibatkan segmen DNA yang dikenal sebagai pengulangan trinukleotida CAG. Orang dengan penyakit Huntington memiliki jumlah pengulangan CAG yang sangat panjang.',
            },
            {
              title: 'Pola Pewarisan',
              description:
                'Penyakit Huntington memiliki pola pewarisan dominan autosomal, artinya satu salinan gen yang bermutasi cukup untuk menyebabkan gangguan ini.',
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-800">
                {card.title}
              </h3>
              <p className="text-slate-600">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
