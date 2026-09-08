import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sample Tender Assurance Review | Article6 Bids',
  description: 'See how Article6 reviews a tender against buyer requirements, evaluation criteria, evidence, compliance and cross-document consistency before submission.',
  alternates: { canonical: '/sample-review' },
};

const samplePdfUrl = 'https://assets.bids.article6.org/samples/bids_sample_review.pdf';

const sampleSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Sample Tender Assurance Review | Article6 Bids',
  url: 'https://bids.article6.org/sample-review',
  description: 'A fictional worked example demonstrating how Article6 reviews a tender against buyer requirements, evaluation criteria, evidence, compliance and cross-document consistency before submission.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Article6 Bids',
    url: 'https://bids.article6.org/',
  },
};

const commitments = [
  ['Mobilisation duration', '6 weeks', '42 days', '–', 'Consistent'],
  ['Mobilisation Manager', 'Full-time', 'Named lead', '0.5 FTE', 'Conflict'],
  ['Governance meetings', 'Weekly', 'Weekly', '–', 'Consistent'],
  ['Go-live date', '1 Nov', '1 Nov', '8 Nov', 'Conflict'],
];

const method = [
  'Requirement extraction',
  'Evaluation mapping',
  'Coverage',
  'Evidence',
  'Compliance',
  'Consistency',
  'Scoring leakage',
  'Prioritised remediation',
];

export default function SampleReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sampleSchema) }} />

      <section className="sample-hero">
        <div className="site-shell sample-narrow">
          <p className="eyebrow">Worked demonstration</p>
          <h1>Sample bid assurance review</h1>
          <p className="lead">This example shows how Article6 reviews a substantially complete tender before submission.</p>
          <p className="lead">The fictional bidder has a credible response and an experienced internal team. The main risk is not poor writing. It is that important commitments are not consistently evidenced across the submission.</p>
          <div className="sample-notice"><strong>Illustrative Sample - Not a Client Engagement</strong><br />All buyer, bidder, response, evidence and finding material on this page is fictional and provided only to demonstrate the review methodology.</div>
          <div className="cta-row">
            <a href={samplePdfUrl} className="cta-primary" target="_blank" rel="noopener noreferrer">Download sample review PDF</a>
            <Link href="/#review" className="cta-secondary">Request bid assurance</Link>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="site-shell sample-narrow">
          <dl className="sample-meta">
            <div><dt>Tender</dt><dd>Illustrative Public-Sector Facilities Services Tender</dd></div>
            <div><dt>Stage</dt><dd>Final pre-submission review</dd></div>
            <div><dt>Status</dt><dd>Substantially complete</dd></div>
            <div><dt>Overall view</dt><dd><span className="status status-amber">Amber</span></dd></div>
          </dl>

          <div className="priority-findings">
            <h2>What we found</h2>
            <ul>
              <li><strong>P1</strong> Mobilisation timing is not fully evidenced.</li>
              <li><strong>P1</strong> The Mobilisation Manager commitment conflicts across documents.</li>
              <li><strong>P2</strong> Relevant experience is claimed but not supported by a measurable outcome.</li>
              <li><strong>P2</strong> Risk controls are described but ownership is unclear.</li>
            </ul>
            <p className="section-intro">The submission is credible, but these issues could make it harder for the evaluator to award stronger marks with confidence.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell sample-narrow">
          <h2>Example: the six-week mobilisation commitment</h2>

          <div className="finding-block">
            <h3>What the buyer asked for</h3>
            <p>Provide a mobilisation plan covering governance, staffing, transition activities, milestones, dependencies, risk controls and readiness for service commencement.</p>
          </div>

          <div className="finding-block">
            <h3>What the bidder said</h3>
            <p>“Our mobilisation team will begin immediately following contract award. We have extensive experience transitioning comparable services and will use our proven mobilisation methodology. A dedicated mobilisation manager will coordinate workstreams, weekly governance meetings and readiness checks. We expect mobilisation to be completed within six weeks.”</p>
          </div>

          <div className="finding-block">
            <h3>What Article6 noticed</h3>
            <p>The response sounds credible, but the six-week commitment is asserted rather than demonstrated.</p>
            <ul>
              <li>No comparable mobilisation is identified.</li>
              <li>No measurable previous outcome is given.</li>
              <li>The six-week period is not mapped to clear milestones.</li>
              <li>The timing is not explicitly reconciled with the buyer&apos;s required commencement date.</li>
            </ul>
          </div>

          <div className="finding-block">
            <h3>Why this matters</h3>
            <p>The evaluator may believe the bidder understands mobilisation but still have insufficient evidence to award stronger marks for credibility and deliverability.</p>
          </div>

          <div className="finding-block">
            <h3>What we would ask the team to do</h3>
            <ol>
              <li>Add one relevant comparable mobilisation example.</li>
              <li>Include the measurable delivery outcome.</li>
              <li>Show the main milestones and dependencies behind the six-week plan.</li>
              <li>Reconcile the same dates and commitments across the supporting documents.</li>
            </ol>
          </div>

          <div className="finding-block">
            <h3>What resolved looks like</h3>
            <p>The finding is resolved when the evaluator can see why the six-week commitment is credible without having to infer the link between the claim, the evidence and the buyer&apos;s required date.</p>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="site-shell sample-narrow">
          <h2>One strong answer can still be undermined elsewhere</h2>
          <p className="section-intro">Tender evaluation happens across the whole submission. A commitment can look credible in the main response and still conflict with a schedule or appendix.</p>
          <div className="table-wrap">
            <table className="assurance-table commitment-table">
              <thead><tr><th>Commitment</th><th>Main response</th><th>Implementation plan</th><th>Resource schedule</th><th>Finding</th></tr></thead>
              <tbody>
                {commitments.map(([commitment, main, plan, resource, finding]) => (
                  <tr key={commitment} className={finding === 'Conflict' ? 'conflict-row' : undefined}><td>{commitment}</td><td>{main}</td><td>{plan}</td><td>{resource}</td><td><strong>{finding}</strong></td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="section-intro">Neither conflict is dramatic on its own. Together, they make the evaluator less certain about which commitment represents the actual delivery plan.</p>
          <p className="section-intro">This is why Article6 reviews the full submission rather than individual answers in isolation.</p>
          <p className="pullquote">The bidder should not require the evaluator to decide which of two conflicting commitments is the real one.</p>
        </div>
      </section>

      <section className="section">
        <div className="site-shell sample-narrow">
          <h2>What we would prioritise before submission</h2>
          <div className="closeout-grid">
            <div><h3>Must do</h3><ul><li>Resolve the Mobilisation Manager contradiction.</li><li>Reconcile the go-live dates.</li><li>Support the six-week mobilisation commitment with evidence.</li><li>Verify mandatory submission requirements.</li></ul></div>
            <div><h3>Do if time allows</h3><ul><li>Quantify the relevant previous delivery outcome.</li><li>Make ownership of risk controls explicit.</li><li>Improve signposting to supporting evidence.</li></ul></div>
            <div><h3>Do not spend time on</h3><ul><li>Stylistic rewriting of already compliant sections.</li><li>Terminology changes made only for tone.</li><li>Polishing low-impact narrative while P1 findings remain unresolved.</li></ul></div>
          </div>
          <p className="pullquote">The purpose of the review is not to create more work. It is to identify the work that matters most before the deadline.</p>
        </div>
      </section>

      <section className="section muted-section">
        <div className="site-shell">
          <h2>How Article6 gets there</h2>
          <p className="section-intro">Behind the simple findings is a consistent assurance process.</p>
          <ol className="method-flow compact-method">
            {method.map((item, index) => <li key={item}><small>{String(index + 1).padStart(2, '0')}</small><strong>{item}</strong></li>)}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="site-shell sample-narrow">
          <h2>Have a substantially complete tender that needs an independent final challenge?</h2>
          <div className="cta-row">
            <Link href="/#review" className="cta-primary">Request bid assurance</Link>
            <Link href="/faq" className="cta-secondary">Read the FAQ</Link>
          </div>
        </div>
      </section>
    </>
  );
}
