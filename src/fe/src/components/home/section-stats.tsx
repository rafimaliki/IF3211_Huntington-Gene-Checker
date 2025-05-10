export default function Stat() {
  return (
    <section className="py-16 bg-blue-950 text-white">
      <div className="w-full mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight mb-6 text-center text-white">
          Huntington's Disease: Historical Perspective
        </h2>
        <p className="text-lg text-blue-100 mb-12 text-center -mt-4">
          Understanding the global impact and historical trends of Huntington's
          disease
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-blue-800 p-6 rounded-lg text-center shadow-md">
            <div className="text-3xl font-bold mb-2">1872</div>
            <div className="text-sm text-blue-100">
              Year first described by George Huntington
            </div>
          </div>
          <div className="bg-blue-800 p-6 rounded-lg text-center shadow-md">
            <div className="text-3xl font-bold mb-2">1993</div>
            <div className="text-sm text-blue-100">
              Year HTT gene discovered
            </div>
          </div>
          <div className="bg-blue-800 p-6 rounded-lg text-center shadow-md">
            <div className="text-3xl font-bold mb-2">30k</div>
            <div className="text-sm text-blue-100">
              Estimated cases in the United States
            </div>
          </div>
          <div className="bg-blue-800 p-6 rounded-lg text-center shadow-md">
            <div className="text-3xl font-bold mb-2">150k</div>
            <div className="text-sm text-blue-100">
              People at risk in the United States
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Historical Timeline
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 pb-8 border-l-2 border-blue-300 last:border-l-0">
              <div className="absolute w-4 h-4 bg-white border-4 border-blue-500 rounded-full -left-[9px] top-0"></div>
              <div className="bg-blue-800 p-4 rounded-lg shadow-md">
                <div className="font-bold text-blue-100 mb-2">1872</div>
                <p className="text-blue-100">
                  George Huntington publishes "On Chorea" describing the disease
                  that would later bear his name.
                </p>
              </div>
            </div>
            <div className="relative pl-8 pb-8 border-l-2 border-blue-300 last:border-l-0">
              <div className="absolute w-4 h-4 bg-white border-4 border-blue-500 rounded-full -left-[9px] top-0"></div>
              <div className="bg-blue-800 p-4 rounded-lg shadow-md">
                <div className="font-bold text-blue-100 mb-2">1950s</div>
                <p className="text-blue-100">
                  Prevalence studies begin, revealing high rates in specific
                  populations like the Lake Maracaibo region of Venezuela.
                </p>
              </div>
            </div>
            <div className="relative pl-8 pb-8 border-l-2 border-blue-300 last:border-l-0">
              <div className="absolute w-4 h-4 bg-white border-4 border-blue-500 rounded-full -left-[9px] top-0"></div>
              <div className="bg-blue-800 p-4 rounded-lg shadow-md">
                <div className="font-bold text-blue-100 mb-2">1983</div>
                <p className="text-blue-100">
                  Genetic marker for Huntington's disease discovered on
                  chromosome 4, enabling the first predictive tests.
                </p>
              </div>
            </div>
            <div className="relative pl-8 pb-8 border-l-2 border-blue-300 last:border-l-0">
              <div className="absolute w-4 h-4 bg-white border-4 border-blue-500 rounded-full -left-[9px] top-0"></div>
              <div className="bg-blue-800 p-4 rounded-lg shadow-md">
                <div className="font-bold text-blue-100 mb-2">1993</div>
                <p className="text-blue-100">
                  The HTT gene and its CAG repeat mutation identified as the
                  cause of Huntington's disease.
                </p>
              </div>
            </div>
            <div className="relative pl-8 pb-8 border-l-2 border-blue-300 last:border-l-0">
              <div className="absolute w-4 h-4 bg-white border-4 border-blue-500 rounded-full -left-[9px] top-0"></div>
              <div className="bg-blue-800 p-4 rounded-lg shadow-md">
                <div className="font-bold text-blue-100 mb-2">2000s</div>
                <p className="text-blue-100">
                  Global prevalence studies show significant geographic
                  variations: 5-10/100,000 in Western populations, lower in
                  Japan and other Asian countries.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            Geographic Distribution
          </h3>
          <p className="text-center text-blue-100 max-w-3xl mx-auto mb-8">
            Huntington's disease shows significant geographic variations in
            prevalence, with some regions having much higher rates due to
            founder effects and genetic isolation.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-3 text-white">
                Lake Maracaibo, Venezuela
              </h4>
              <p className="text-blue-100">
                The highest known concentration in the world, with approximately
                700 per 100,000 people affected, traced back to a single
                ancestor in the early 1800s.
              </p>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-3 text-white">
                Western Europe
              </h4>
              <p className="text-blue-100">
                Prevalence of 5-10 per 100,000, with higher rates in some
                isolated communities in Scotland, Wales, and Sweden.
              </p>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-3 text-white">
                Japan and East Asia
              </h4>
              <p className="text-blue-100">
                Much lower prevalence of 0.1-0.5 per 100,000, suggesting
                different genetic backgrounds or founder effects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
