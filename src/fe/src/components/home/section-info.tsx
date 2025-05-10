export default function InfoCards() {
  return (
    <section id="learn-more" className="py-16 bg-slate-100">
      <div className="w-full mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-6 text-center text-blue-900">
          What is Huntington's Disease?
        </h2>
        <p className="text-lg text-slate-600 mb-12 text-center -mt-4">
          Huntington's disease is a progressive brain disorder caused by a
          genetic mutation.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-[95%] mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-blue-800">
              Genetic Basis
            </h3>
            <p className="text-slate-600">
              Huntington's disease is caused by a mutation in the HTT gene,
              which provides instructions for making a protein called
              huntingtin.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-blue-800">
              CAG Repeats
            </h3>
            <p className="text-slate-600">
              The mutation involves a DNA segment known as a CAG trinucleotide
              repeat. People with Huntington's disease have abnormally long CAG
              repeats.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-blue-800">
              Inheritance Pattern
            </h3>
            <p className="text-slate-600">
              Huntington's disease has an autosomal dominant inheritance
              pattern, meaning one copy of the altered gene is sufficient to
              cause the disorder.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
