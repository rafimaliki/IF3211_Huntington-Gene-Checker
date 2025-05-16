import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_secondary/about/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-blue-900">
        About Huntington's Disease DNA Analysis
      </h1>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">
          What is Huntington's Disease?
        </h2>
        <p className="mb-4 text-slate-700">
          Huntington's disease (HD) is a progressive brain disorder that causes
          uncontrolled movements, emotional problems, and loss of thinking
          ability. It's caused by a mutation in the HTT gene, which provides
          instructions for making a protein called huntingtin.
        </p>
        <p className="mb-4 text-slate-700">
          The mutation that causes HD involves a DNA segment known as a CAG
          trinucleotide repeat. Normally, this segment is repeated 10 to 35
          times within the gene. In people with HD, the CAG segment is repeated
          36 or more times.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">
          How CAG Repeats Relate to Huntington's Disease
        </h2>
        <p className="mb-4 text-slate-700">
          The number of CAG repeats in the HTT gene determines whether a person
          will develop HD and at what age symptoms will begin:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-700">
          <li>
            <strong>10-26 repeats:</strong> Normal range, not associated with
            HD.
          </li>
          <li>
            <strong>27-35 repeats:</strong> Intermediate range, not associated
            with disease but may expand in future generations.
          </li>
          <li>
            <strong>36-39 repeats:</strong> Reduced penetrance, may or may not
            develop symptoms.
          </li>
          <li>
            <strong>40+ repeats:</strong> Full penetrance, will develop HD if
            they live a normal lifespan.
          </li>
        </ul>
        <p className="mb-4 text-slate-700">
          Generally, the higher the number of repeats, the earlier the onset of
          symptoms and the more severe the course of the disease.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">
          About Our DNA Analyzer Tool
        </h2>
        <p className="mb-4 text-slate-700">
          Our DNA Analyzer tool is designed for educational purposes to help
          understand how CAG repeats in the HTT gene are analyzed and
          interpreted. The tool:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-700">
          <li>
            Accepts DNA sequence files in common formats (.txt, .fasta, .fa,
            .seq)
          </li>
          <li>Identifies CAG repeats in the DNA sequence</li>
          <li>Counts the number of consecutive CAG repeats</li>
          <li>
            Provides an interpretation based on established clinical guidelines
          </li>
        </ul>
        <p className="mb-4 text-slate-700">
          <strong>Important Note:</strong> This tool is for educational purposes
          only and should not be used for clinical diagnosis. Proper genetic
          testing for Huntington's disease should be performed by qualified
          healthcare professionals in a clinical setting, accompanied by
          appropriate genetic counseling.
        </p>
      </div>
    </div>
  )
}
