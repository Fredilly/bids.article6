import Link from 'next/link';

const tenderRisks = [
  ['A requirement is only partly answered', 'The response addresses the topic but misses one of the specific points, conditions or sub-questions the buyer asked for.'],
  ['A claim is credible but unsupported', 'Your team knows the statement is true, but the evaluator cannot see the case study, metric, result or document that proves it.'],
  ['The evidence is there but hard to score', 'Relevant proof exists somewhere in the response or attachments, but the evaluator has to work to connect it to the scored requirement.'],
  ['Different answers tell different stories', 'Separate contributors, sections or attachments use inconsistent figures, commitments, terminology or delivery assumptions.'],
];

const checks = [
  ['Buyer requirements', 'Whether every requested point has actually been addressed.'],
  ['Scoring criteria', 'Whether the response gives the evaluator what the published scoring model asks for.'],
  ['Evidence', 'Whether important claims are supported by relevant examples, results, metrics or documentation.'],
  ['Compliance', 'Whether mandatory requirements, limits or submission instructions have been missed.'],
  ['Consistency', 'Whether different answers, contributors or documents contradict one another.'],
  ['Gaps', 'Where your organisation may be capable of delivering but the bid does not demonstrate it clearly enough.'],
];

const findings = [
  ['Requirement', 'Mobilisation plan and implementation timescales'],
  ['Draft response', 'Approach described across two sections'],
  ['Evidence', 'Previous mobilisation referenced without result'],
  ['Assessment', 'Partially supported'],
  ['Action', 'Add outcome evidence and reconcile timescales'],
];

const deliverables = [
  ['What we found', 'The requirement, weakness, inconsistency or unsupported claim.'],
  ['Why it matters', 'How the issue relates to the buyer requirement or published evaluation criteria.'],
  ['What needs to change', 'A clear action your team can resolve before submission.'],
  ['Where it appears', 'The relevant response section, buyer requirement or supporting document.'],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="site-shell hero-grid">
          <div>
            <p className="eyebrow">Independent pre-submission review</p>
            <h1>Your tender is written. But is everything the buyer needs to score actually there?</h1>
            <p className="lead">Your team knows the business. The evaluator only knows what is in the submission. We independently review the draft against the buyer&apos;s requirements, scoring criteria and requested evidence before you submit.</p>
            <div className="cta-row">
              <Link href="#review" className="cta-primary">Review my tender</Link>
              <Link href="#what-we-check" className="cta-secondary">See what we check</Link>
            </div>
            <p className="micro">Independent final scrutiny. Your team keeps control of the response.</p>
          </div>

          <div className="review-card">
            <div className="review-card-head">
              <small>Article6 Bids</small>
              <h3>Pre-submission review finding</h3>
            </div>
            {findings.map(([label, value]) => (
              <div className="review-row" key={label}>
                <span>{label}</span><strong>{value}</strong>
              </div>
            ))}
            <div className="review-note">The point is not to rewrite your bid. It is to identify what an evaluator may struggle to award marks for.</div>
          </div>
        </div>
      </section>

      <section id="why-review" className="section muted-section">
        <div className="site-shell">
          <p className="eyebrow">The hidden risk</p>
          <h2>A strong business can still submit a weak bid.</h2>
          <p className="section-intro">A response can sound convincing and still lose marks because something the buyer asked for is missing, difficult to find, inconsistent or unsupported.</p>
          <div className="risk-list">
            {tenderRisks.map(([title, copy], index) => (
              <div className="risk-row" key={title}>
                <span className="risk-num">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
          <p className="pullquote">Your capability is not what gets scored. The submission is.</p>
        </div>
      </section>

      <section className="dark">
        <div className="site-shell dark-grid">
          <div>
            <p className="eyebrow">The evaluator&apos;s side</p>
            <h2>We read it from the buyer&apos;s side of the table.</h2>
          </div>
          <div>
            <p>We do not ask whether the bid simply sounds good. We ask what the buyer requested, what they are scoring, where the supporting evidence sits, and whether the evaluator can award the marks from what is actually written.</p>
            <p><strong>What was asked? What is being scored? Where is the proof? Can the evaluator see it?</strong></p>
          </div>
        </div>
      </section>

      <section id="what-we-check" className="section">
        <div className="site-shell">
          <p className="eyebrow">What we check</p>
          <h2>Every requirement. Every claim. Every piece of evidence.</h2>
          <p className="section-intro">The review is tied back to the buyer&apos;s own documents, not a generic writing checklist.</p>
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
          <p className="eyebrow">What you receive</p>
          <h2>You receive the problems. Not another rewritten tender.</h2>
          <p className="section-intro">We identify what may cost the submission marks, explain why it matters and give your team a clear action to resolve it before the deadline.</p>
          <div className="grid-2">
            {deliverables.map(([title, copy]) => (
              <div className="deliverable" key={title}><h3>{title}</h3><p>{copy}</p></div>
            ))}
          </div>
          <div className="highlight">
            <p className="eyebrow">Independent final challenge</p>
            <h3>You know your business. We check whether the submission proves it.</h3>
            <p>Article6 does not take ownership of the bid or replace your internal team, bid writer or subject-matter experts. The review gives them an independent view of what an evaluator may see before the submission becomes final.</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section">
        <div className="site-shell">
          <p className="eyebrow">How it works</p>
          <h2>One final review before the buyer sees it.</h2>
          <div className="steps">
            {[
              ['01', 'Send the tender', 'Buyer documents, draft response and submission deadline.'],
              ['02', 'We review it', 'Requirements, scoring criteria, evidence, compliance and consistency.'],
              ['03', 'You receive findings', 'Prioritised gaps with the reason and required action.'],
              ['04', 'Your team decides', 'You retain ownership and make the final submission changes.'],
            ].map(([number, title, copy]) => (
              <div className="step" key={number}><small>{number}</small><h3>{title}</h3><p>{copy}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="review" className="final-cta">
        <div className="site-shell">
          <p className="eyebrow">Before you submit</p>
          <h2>The buyer gets one final version. Know what is in it before you send it.</h2>
          <p>Send us the tender title, buyer, deadline and a short note about where the draft stands. We will confirm whether the review is a fit before any documents are shared.</p>
          <a href="mailto:fredilly@article6.org?subject=Article6%20Bids%20-%20Tender%20Review" className="light-cta">Request a review</a>
          <p className="micro">Commercially sensitive documents should only be shared after scope and handling are confirmed.</p>
        </div>
      </section>
    </>
  );
}
