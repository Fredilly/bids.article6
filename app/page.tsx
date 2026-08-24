const reviewAreas = [
  "Buyer requirements and mandatory instructions",
  "Scoring criteria and answer alignment",
  "Evidence sufficiency and unsupported claims",
  "Gaps, inconsistencies, and avoidable compliance risk",
];

const outputs = [
  "Rule-by-rule review against the tender pack",
  "Priority scoring and compliance risks",
  "Evidence gaps and weak claims",
  "Clear changes to make before submission",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Article6 Bids home">
            <span className="brand-mark">A6</span>
            <span>Article6 Bids</span>
          </a>
          <a className="nav-cta" href="#submit">Review my bid</a>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Independent pre-submission review</p>
            <h1>Before you submit, check that the response answers what the buyer is actually scoring.</h1>
            <p className="lede">
              Article6 independently reviews your draft tender response against the buyer&apos;s requirements, scoring criteria, requested evidence, and compliance instructions before it reaches the buyer.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#submit">Submit for review</a>
              <a className="button secondary" href="#review">See what we check</a>
            </div>
            <p className="trust-line">Independent final review. We do not replace your bid team and we are not a generic AI writing tool.</p>
          </div>

          <div className="score-card" aria-label="Illustrative tender review preview">
            <div className="score-head">
              <span>Article6 Bids</span>
              <strong>Pre-submission review</strong>
              <small>Illustrative review summary</small>
            </div>
            <div className="score-body">
              <div className="finding"><span>Mandatory requirement</span><strong>Missing</strong></div>
              <div className="finding"><span>Evidence claim</span><strong>Weak</strong></div>
              <div className="finding"><span>Scoring alignment</span><strong>Unclear</strong></div>
              <p>Each issue is tied back to the buyer&apos;s rule, why it matters, and what to fix before submission.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container narrow">
          <p className="eyebrow">Why this matters</p>
          <h2>Good writing can still lose points if it misses what the buyer asked for.</h2>
          <p>
            Tender responses often fail for avoidable reasons: a requirement is answered indirectly, evidence is too weak, an instruction is missed, or a strong claim is not tied to proof. An independent final review catches those issues before submission.
          </p>
        </div>
      </section>

      <section id="review" className="section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">What we check</p>
            <h2>A structured review against the tender pack, not a generic rewrite.</h2>
          </div>
          <ul className="check-list">
            {reviewAreas.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section muted">
        <div className="container two-col">
          <div>
            <p className="eyebrow">What you receive</p>
            <h2>A short, practical list of what could cost you points and what to change.</h2>
            <p>The goal is confidence before submission, not more process. We focus on issues that can materially affect compliance or scoring.</p>
          </div>
          <ul className="deliverables">
            {outputs.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container process-grid">
          <div>
            <span className="step">01</span>
            <h3>Send the tender pack and draft</h3>
            <p>We need the buyer&apos;s requirements and the response you plan to submit.</p>
          </div>
          <div>
            <span className="step">02</span>
            <h3>We map rules to answers</h3>
            <p>We review requirement by requirement, checking scoring alignment, evidence, consistency, and compliance.</p>
          </div>
          <div>
            <span className="step">03</span>
            <h3>You fix the important issues</h3>
            <p>You receive a focused review showing what to address before the deadline.</p>
          </div>
        </div>
      </section>

      <section id="submit" className="section submit-section">
        <div className="container submit-card">
          <div>
            <p className="eyebrow light">Submit for review</p>
            <h2>Have a tender you want checked before submission?</h2>
            <p>
              The dedicated tender upload flow is being connected to Article6&apos;s private document intake. Until that is ready, contact us with the tender title and deadline and we will confirm the next step.
            </p>
          </div>
          <a className="button light-button" href="mailto:fredilly@article6.org?subject=Tender%20pre-submission%20review">Email Article6</a>
        </div>
      </section>

      <footer>
        <div className="container footer-wrap">
          <span>© 2026 Article6</span>
          <span>Independent pre-submission tender review. Article6 does not guarantee award, buyer scores, or procurement outcomes.</span>
        </div>
      </footer>
    </main>
  );
}
