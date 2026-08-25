import Link from 'next/link';
import TenderReviewForm from '../components/TenderReviewForm';

const tenderRisks = [
  ['The response answers the topic, not the scored requirement', 'The wording may be relevant, but it does not explicitly address every element the buyer has asked the evaluator to assess.'],
  ['A credible claim is not evidenced strongly enough', 'Experience, capability or performance is asserted, but the evaluator cannot see the case study, metric, outcome or reference needed to support it.'],
  ['The evidence is present but difficult to award marks for', 'Relevant proof exists somewhere in the response or attachments, but the evaluator has to infer the connection instead of being shown it clearly.'],
  ['Different sections create different commitments', 'Separate contributors, schedules or attachments use inconsistent figures, timescales, terminology or delivery assumptions.'],
];

const checks = [
  ['Evaluation criteria alignment', 'Whether each response is structured around what the published evaluation criteria actually reward.'],
  ['Requirement coverage', 'Whether every question, sub-question, instruction and requested output has been addressed.'],
  ['Evidence sufficiency', 'Whether important claims are supported by specific examples, outcomes, metrics, references or documents.'],
  ['Compliance risk', 'Whether mandatory requirements, word limits, formats, declarations or submission instructions have been missed.'],
  ['Cross-bid consistency', 'Whether answers, schedules and attachments make compatible commitments and use consistent assumptions.'],
  ['Scoring opportunity', 'Where genuine capability exists but the response is making the evaluator work too hard to award the available marks.'],
];

const findings = [
  ['Scored requirement', 'Mobilisation plan and implementation timescales'],
  ['Draft evidence', 'Previous mobilisation referenced without measurable outcome'],
  ['Evaluator risk', 'Relevant experience stated, but delivery proof is weak'],
  ['Assessment', 'Partially evidenced'],
  ['Required action', 'Add outcome evidence and reconcile mobilisation dates'],
];

const deliverables = [
  ['Finding', 'The requirement, weakness, inconsistency or unsupported claim identified in the submission.'],
  ['Evaluation impact', 'Why the issue matters against the buyer requirement, evaluation criteria or compliance instruction.'],
  ['Required action', 'A specific change your team can make before submission.'],
  ['Source reference', 'The relevant tender clause, question, response section or supporting document.'],
];

const assuranceUses = [
  ['Evaluator alignment', 'Test whether the response makes it easy for an evaluator to see why marks should be awarded.'],
  ['Evidence strength', 'Challenge claims that rely on assertion where the buyer is likely to expect proof, outcomes or measurable results.'],
  ['Compliance confidence', 'Check pass/fail requirements, instructions, limits and mandatory submission conditions before they become avoidable risk.'],
  ['Scoring leakage', 'Find places where capability exists but the response has not converted it into clear, scoreable evidence.'],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="site-shell hero-grid">
          <div>
            <p className="eyebrow">Independent pre-submission bid assurance</p>
            <h1>Your tender is written. But is everything the buyer needs to score actually there?</h1>
            <p className="lead">Your team knows the business. The evaluator only knows what is in the submission. We independently test the draft against the buyer&apos;s requirements, evaluation criteria, evidence expectations and submission rules before you submit.</p>
            <div className="cta-row">
              <Link href="#review" className="cta-primary">Review my tender</Link>
              <Link href="#what-we-check" className="cta-secondary">See what we check</Link>
            </div>
            <p className="micro">Independent final challenge. Your team retains ownership of the response.</p>
          </div>

          <div className="review-card">
            <div className="review-card-head">
              <small>Article6 Bids</small>
              <h3>Bid assurance finding</h3>
            </div>
            {findings.map(([label, value]) => (
              <div className="review-row" key={label}>
                <span>{label}</span><strong>{value}</strong>
              </div>
            ))}
            <div className="review-note">A finding is tied back to what the buyer is evaluating and the evidence available to support the score.</div>
          </div>
        </div>
      </section>

      <section id="why-review" className="section muted-section">
        <div className="site-shell">
          <p className="eyebrow">The hidden risk</p>
          <h2>A strong business can still leave marks on the table.</h2>
          <p className="section-intro">Tender evaluation is not a judgement of everything your organisation can do. It is a judgement of what the submitted response demonstrates against the published criteria.</p>
          <div className="risk-list">
            {tenderRisks.map(([title, copy], index) => (
              <div className="risk-row" key={title}>
                <span className="risk-num">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
          <p className="pullquote">Your capability is not what gets scored. The evidence in the submission is.</p>
        </div>
      </section>

      <section className="dark">
        <div className="site-shell dark-grid">
          <div>
            <p className="eyebrow">Evaluator-side review</p>
            <h2>We read it from the other side of the table.</h2>
          </div>
          <div>
            <p>We do not ask whether the bid simply sounds persuasive. We ask what the buyer requested, how the response will be evaluated, what evidence supports each important claim, and whether the evaluator can award the marks without having to infer your meaning.</p>
            <p><strong>What was asked? What is being evaluated? Where is the proof? Is it easy to score?</strong></p>
          </div>
        </div>
      </section>

      <section id="what-we-check" className="section">
        <div className="site-shell">
          <p className="eyebrow">What we check</p>
          <h2>Bid assurance against the buyer&apos;s own evaluation framework.</h2>
          <p className="section-intro">The review is anchored to the ITT, questionnaire, evaluation criteria, instructions and supporting schedules rather than a generic writing checklist.</p>
          <div className="grid-3">
            {checks.map(([title, copy], index) => (
              <div className="check" key={title}>
                <small>0{index + 1}</small>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="site-shell">
          <p className="eyebrow">Independent bid assurance</p>
          <h2>What experienced bid teams use an independent review for.</h2>
          <p className="section-intro">The value is not another opinion on writing style. It is a final challenge to whether the submission is complete, evidenced, compliant and easy to evaluate.</p>
          <div className="grid-2">
            {assuranceUses.map(([title, copy]) => (
              <div className="deliverable" key={title}><h3>{title}</h3><p>{copy}</p></div>
            ))}
          </div>
          <p className="pullquote">Scoring leakage happens when your organisation can do the work, but the submission does not make the evidence easy to award marks for.</p>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <p className="eyebrow">What you receive</p>
          <h2>A structured assurance review. Not another rewritten tender.</h2>
          <p className="section-intro">We identify the issues that may weaken evaluation, explain the likely impact and give your team a clear action to resolve before the deadline.</p>
          <div className="grid-2">
            {deliverables.map(([title, copy]) => (
              <div className="deliverable" key={title}><h3>{title}</h3><p>{copy}</p></div>
            ))}
          </div>
          <div className="highlight">
            <p className="eyebrow">The role of Article6</p>
            <h3>You know your business. We test whether the evaluator can see enough of it to award the marks.</h3>
            <p>Article6 does not replace your bid lead, writer or subject-matter experts. We act as the independent quality gate before submission, challenging requirement coverage, evidence, compliance and evaluation clarity.</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section muted-section">
        <div className="site-shell">
          <p className="eyebrow">How it works</p>
          <h2>One final assurance pass before the buyer sees it.</h2>
          <div className="steps">
            {[
              ['01', 'Send the tender pack', 'Buyer documents, current draft and submission deadline.'],
              ['02', 'We map the evaluation', 'Requirements, evaluation criteria, evidence expectations and compliance instructions.'],
              ['03', 'We challenge the draft', 'Prioritised findings linked to the requirement, evaluation impact and required action.'],
              ['04', 'Your team resolves', 'You retain ownership and decide the final submission changes.'],
            ].map(([number, title, copy]) => (
              <div className="step" key={number}><small>{number}</small><h3>{title}</h3><p>{copy}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="review" className="review-intake">
        <div className="site-shell intake-grid">
          <div className="intake-copy">
            <p className="eyebrow">Request bid assurance</p>
            <h2>Send the package we will actually review.</h2>
            <p>Provide the tender details, deadline, buyer documents and your current response. We verify the full package before it is added to our review system.</p>
            <div className="intake-points">
              <span>Private document storage</span>
              <span>Multiple tender files accepted</span>
              <span>Linked directly to your review opportunity</span>
            </div>
            <p className="micro"><strong>Reviews from €750.</strong> Final pricing depends on submission size, complexity and deadline, and is confirmed before the review begins.</p>
          </div>
          <div className="intake-panel">
            <TenderReviewForm />
          </div>
        </div>
      </section>
    </>
  );
}
