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
          What is Huntington's Disease?
        </h2>
        <p className="text-lg text-slate-600 mb-12 text-center -mt-4">
          Huntington's disease is a progressive brain disorder caused by a
          genetic mutation.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-[95%] mx-auto ">
          {[
            {
              title: 'Genetic Basis',
              description:
                "Huntington's disease is caused by a mutation in the HTT gene, which provides instructions for making a protein called huntingtin.",
            },
            {
              title: 'CAG Repeats',
              description:
                'The mutation involves a DNA segment known as a CAG trinucleotide repeat. People with Huntington’s disease have abnormally long CAG repeats.',
            },
            {
              title: 'Inheritance Pattern',
              description:
                "Huntington's disease has an autosomal dominant inheritance pattern, meaning one copy of the altered gene is sufficient to cause the disorder.",
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
