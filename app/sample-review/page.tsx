import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Worked Sample Review | Article6 Bids',
  description: 'A fictional worked example showing how Article6 Bids tests a tender response against buyer requirements, evaluation criteria, evidence, compliance and scoring risk.',
  alternates: { canonical: '/sample-review' },
};

const sampleSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Article6 Bids worked sample review',
  url: 'https://bids.article6.org/sample-review',
  description: 'A fictional worked example demonstrating the Article6 pre-submission bid assurance methodology.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Article6 Bids',
    url: 'https://bids.article6.org/',
  },
  about: {
    '@type': 'Service',
    name: 'Independent pre-submission tender and bid assurance review',
  },
};

const sampleRows = [
  ['Context', 'Fictional public-sector facilities tender. The bidder has an experienced internal team and a substantially complete submission. The buyer has published a weighted mobilisation criterion and requests a detailed implementation plan supported by relevant delivery evidence.'],
  ['Buyer requirement', 'Provide a mobilisation plan covering governance, staffing, transition activities, key milestones, dependencies, risk controls and readiness for service commencement.'],
  ['Evaluation criterion', 'Quality and credibility of the proposed mobilisation approach, including whether the bidder demonstrates a realistic, evidenced plan capable of achieving service commencement on the required date.'],
  ['Illustrative response', '“Our mobilisation team will begin immediately following contract award. We have extensive experience transitioning comparable services and will use our proven mobilisation methodology. A dedicated mobilisation manager will coordinate workstreams, weekly governance meetings and readiness checks. We expect mobilisation to be completed within six weeks.”'],
  ['Article6 finding', 'The response describes a plausible approach but does not yet show enough evidence for an evaluator to test whether the six-week commitment is realistic. The draft refers to comparable transitions without identifying one, gives no measurable prior outcome, and does not map the six-week timeline to the buyer’s required commencement date.'],
  ['Evaluator risk', 'The evaluator may accept that the bidder understands mobilisation but have limited basis for awarding stronger marks for credibility, deliverability and evidence. The evaluator must infer that prior experience supports the proposed timescale.'],
  ['Evidence gap', 'No named comparable mobilisation, no duration or outcome from that mobilisation, no milestone schedule in the response, and no explicit reconciliation between the proposed six-week period and the buyer’s stated commencement date.'],
  ['Priority', 'High. The issue affects a weighted quality criterion and a core delivery commitment.'],
  ['Required action', 'Add one relevant mobilisation example with a measurable outcome; show the main mobilisation milestones and dependencies; state how the proposed timeline aligns with the required commencement date; reconcile any different mobilisation dates elsewhere in the submission.'],
  ['Example resolution', '“For a comparable multi-site transition, our mobilisation team completed readiness activity in 38 days against a 42-day plan, with all critical staffing, access and service-continuity controls signed off before go-live. For this contract, the six-week plan runs from award to the buyer’s required service commencement date and is structured around four control points: mobilisation launch, staffing and access readiness, operational acceptance, and final go-live approval. The detailed schedule in Appendix M1 sets out owners, dependencies and escalation points for each milestone.”'],
  ['Explanation', 'The revised example does not merely add persuasive language. It connects the commitment to evidence, makes the timing testable, and gives the evaluator a clearer route from the published criterion to the proof in the response and supporting schedule.'],
];

const framework = [
  ['01', 'Requirement extraction', 'Identify the explicit buyer request, mandatory instruction and requested output.'],
  ['02', 'Evaluation mapping', 'Connect the requirement to the published criterion and what the evaluator is being asked to judge.'],
  ['03', 'Coverage', 'Check whether every element of the requirement is answered directly.'],
  ['04', 'Evidence', 'Test whether important claims are supported by specific proof, outcomes, metrics or references.'],
  ['05', 'Compliance', 'Check mandatory conditions, limits, formats, declarations and submission instructions.'],
  ['06', 'Consistency', 'Compare commitments, figures, dates and assumptions across the response and attachments.'],
  ['07', 'Scoring leakage', 'Identify where genuine capability exists but the evaluator must infer too much to award the available marks confidently.'],
  ['08', 'Prioritised remediation', 'Turn the highest-impact issues into specific actions the bid team can resolve before submission.'],
];

export default function SampleReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sampleSchema) }} />

      <section className="sample-hero">
        <div className="site-shell sample-narrow">
          <p className="eyebrow">Worked demonstration</p>
          <h1>Sample bid assurance review</h1>
          <p className="lead">This page is a fictional, illustrative demonstration of the Article6 methodology. It is not a customer engagement, testimonial, case study or achieved client result.</p>
          <div className="sample-notice"><strong>Illustrative material only.</strong> The buyer, bidder, requirement, response, evidence and findings below are fictional and exist only to show how an assurance review is structured.</div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="site-shell sample-narrow">
          <p className="eyebrow">The worked example</p>
          <h2>From buyer requirement to prioritised remediation.</h2>
          <p className="section-intro">A review finding is useful only when the team can trace it back to the buyer material, understand the evaluation risk and see what needs to change.</p>
          <dl className="sample-review-list">
            {sampleRows.map(([label, value]) => (
              <div className="sample-review-row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="site-shell sample-narrow">
          <p className="eyebrow">Method demonstrated</p>
          <h2>The same review framework applied systematically.</h2>
          <div className="sample-method">
            {framework.map(([number, title, copy]) => (
              <div className="sample-method-row" key={title}>
                <small>{number}</small>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="site-shell sample-narrow">
          <p className="eyebrow">Scope</p>
          <h2>What the example is showing, and what it is not.</h2>
          <div className="grid-2">
            <div className="deliverable">
              <h3>Article6 is testing</h3>
              <p>Whether the response answers the buyer&apos;s scored requirement, whether the evidence supports the claim, whether commitments are internally consistent, and what the team should prioritise before submission.</p>
            </div>
            <div className="deliverable">
              <h3>Article6 is not creating</h3>
              <p>Article6 does not invent the bidder&apos;s experience, metrics, credentials, evidence or customer history. Any final resolution must be grounded in evidence the bidder can genuinely support.</p>
            </div>
          </div>
          <div className="cta-row">
            <Link href="/#review" className="cta-primary">Request bid assurance</Link>
            <Link href="/" className="cta-secondary">Back to Article6 Bids</Link>
          </div>
        </div>
      </section>
    </>
  );
}
