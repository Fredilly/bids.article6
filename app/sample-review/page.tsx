import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sample Tender Assurance Review | Article6 Bids',
  description: 'See how Article6 reviews a tender against buyer requirements, evaluation criteria, evidence, compliance and cross-document consistency before submission.',
  alternates: { canonical: '/sample-review' },
};

const samplePdfUrl = process.env.NEXT_PUBLIC_SAMPLE_REVIEW_PDF_URL;

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

const summaryRows = [
  ['Mandatory compliance', 'Green', 'No material blocker identified in this example'],
  ['Requirement coverage', 'Amber', 'One high-weighted criterion is only partially evidenced'],
  ['Evidence strength', 'Amber', 'Relevant experience is claimed but not converted into specific proof'],
  ['Cross-document consistency', 'Red', 'Resource and go-live commitments conflict'],
  ['Evaluator clarity', 'Amber', 'Evaluator must infer too much in key areas'],
];

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
          <p className="lead">A worked example showing how Article6 tests a substantially complete tender against the buyer&apos;s requirements, evaluation criteria, evidence expectations and submission rules before submission.</p>
          <div className="sample-notice"><strong>Illustrative Sample - Not a Client Engagement</strong><br />All buyer, bidder, response, evidence and finding material on this page is fictional and provided only to demonstrate the review methodology.</div>
          <div className="cta-row">
            {samplePdfUrl ? (
              <a href={samplePdfUrl} className="cta-primary">Download sample review PDF</a>
            ) : (
              <span className="cta-primary cta-disabled" aria-disabled="true">Download sample review PDF</span>
            )}
            <Link href="/#review" className="cta-secondary">Request bid assurance</Link>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="site-shell sample-narrow">
          <p className="eyebrow">Assurance summary</p>
          <h2>Final pre-submission assurance</h2>
          <dl className="sample-meta">
            <div><dt>Tender</dt><dd>Illustrative Public-Sector Facilities Services Tender</dd></div>
            <div><dt>Review stage</dt><dd>Final pre-submission assurance</dd></div>
            <div><dt>Submission status</dt><dd>Substantially complete draft</dd></div>
          </dl>
          <div className="assessment-banner"><span>Overall assessment</span><strong>AMBER - credible submission with material scoring leakage to resolve</strong></div>
          <div className="table-wrap">
            <table className="assurance-table">
              <thead><tr><th>Area</th><th>Status</th><th>Article6 view</th></tr></thead>
              <tbody>
                {summaryRows.map(([area, status, view]) => (
                  <tr key={area}><td>{area}</td><td><span className={`status status-${status.toLowerCase()}`}>{status}</span></td><td>{view}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="priority-findings">
            <h3>Priority findings</h3>
            <ul>
              <li><strong>P1</strong> Mobilisation timescale insufficiently evidenced</li>
              <li><strong>P1</strong> Mobilisation Manager commitment conflicts across documents</li>
              <li><strong>P2</strong> Comparable experience lacks measurable outcomes</li>
              <li><strong>P2</strong> Risk controls lack explicit ownership</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell sample-narrow">
          <p className="eyebrow">Worked P1 finding</p>
          <h2>Mobilisation commitment is not sufficiently evidenced</h2>
          <div className="finding-priority">P1 - Must Resolve</div>
          <div className="finding-block"><h3>Buyer requirement</h3><p>Provide a mobilisation plan covering governance, staffing, transition activities, key milestones, dependencies, risk controls and readiness for service commencement.</p></div>
          <div className="finding-block"><h3>Evaluation focus</h3><p>Quality and credibility of the mobilisation approach, including whether the bidder demonstrates a realistic, evidenced plan capable of achieving service commencement on the required date.</p></div>
          <div className="finding-block"><h3>Current response</h3><p>“Our mobilisation team will begin immediately following contract award. We have extensive experience transitioning comparable services and will use our proven mobilisation methodology. A dedicated mobilisation manager will coordinate workstreams, weekly governance meetings and readiness checks. We expect mobilisation to be completed within six weeks.”</p></div>
          <div className="finding-block"><h3>Article6 assessment</h3><p>The approach is plausible, but the evaluator cannot adequately test whether the six-week commitment is credible. The response states experience and a delivery period without showing the comparable evidence, milestone sequence or timing reconciliation needed to support that commitment.</p></div>
          <div className="finding-block"><h3>Evaluator risk</h3><p>The evaluator may recognise understanding of mobilisation but have insufficient evidence for stronger marks around credibility and deliverability.</p></div>
          <div className="finding-block"><h3>Evidence gap</h3><ul><li>No identified comparable mobilisation</li><li>No measurable prior outcome</li><li>No clear milestone sequence</li><li>No explicit reconciliation with the required commencement date</li></ul></div>
          <div className="finding-block"><h3>Required action</h3><ol><li>Add one relevant comparable mobilisation example with measurable evidence.</li><li>Show main milestones and dependencies.</li><li>Map the proposed timeline directly to the buyer&apos;s commencement date.</li><li>Reconcile the same commitment across all supporting documents.</li></ol></div>
          <div className="finding-block"><h3>Example resolution</h3><p>For a comparable multi-site transition, the bidder could insert genuine, supportable evidence showing the actual mobilisation duration, readiness outcome and control points achieved, then map the current six-week plan directly to the buyer&apos;s required commencement date and the detailed implementation schedule.</p></div>
          <div className="finding-block"><h3>Explanation</h3><p>The resolution should not simply add persuasive language. It should connect the delivery commitment to evidence, make the timing testable and give the evaluator a clear route from requirement to claim to proof.</p></div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="site-shell sample-narrow">
          <p className="eyebrow">Cross-document assurance</p>
          <h2>The risk may only appear when the whole submission is compared</h2>
          <p className="section-intro">Strong individual sections can still create evaluation risk when commitments conflict across schedules and attachments.</p>
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
          <p className="pullquote">The bidder should not require the evaluator to decide which of two conflicting commitments is the real one.</p>
        </div>
      </section>

      <section className="section">
        <div className="site-shell sample-narrow">
          <p className="eyebrow">Submission close-out</p>
          <h2>Prioritised actions for the time that remains</h2>
          <div className="closeout-grid">
            <div><h3>Must do</h3><ul><li>Resolve Mobilisation Manager contradiction</li><li>Reconcile go-live dates</li><li>Evidence mobilisation timescale</li><li>Verify mandatory declarations and submission instructions</li></ul></div>
            <div><h3>Do if time allows</h3><ul><li>Quantify relevant previous outcomes</li><li>Strengthen ownership around risk controls</li><li>Improve evaluator signposting</li></ul></div>
            <div><h3>Do not spend time on</h3><ul><li>Stylistic rewriting of already compliant sections</li><li>Terminology changes made only for tone</li><li>Polishing low-impact narrative while P1 findings remain unresolved</li></ul></div>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="site-shell sample-narrow">
          <p className="eyebrow">Close-out criteria</p>
          <h2>What resolved means</h2>
          <p className="section-intro">A material finding is considered resolved when:</p>
          <ul className="use-list"><li>The requirement is answered directly.</li><li>Supporting evidence is present.</li><li>Commitments are consistent.</li><li>Mandatory conditions are satisfied.</li><li>The evaluator can understand the connection between requirement, claim and evidence without inference.</li></ul>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <p className="eyebrow">Review methodology</p>
          <h2>A consistent assurance sequence</h2>
          <ol className="method-flow compact-method">
            {method.map((item, index) => <li key={item}><small>{String(index + 1).padStart(2, '0')}</small><strong>{item}</strong></li>)}
          </ol>
        </div>
      </section>

      <section className="section muted-section">
        <div className="site-shell sample-narrow">
          <p className="eyebrow">Independent final challenge</p>
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
