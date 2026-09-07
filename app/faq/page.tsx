import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tender Review & Bid Assurance FAQs | Article6 Bids',
  description: 'Practical answers about independent tender review, evaluator-side bid assurance, tight submission deadlines, evidence, scoring risk and final pre-submission checks.',
  alternates: { canonical: '/faq' },
};

const faqs = [
  {
    question: 'Who is Article6 Bids for?',
    answer: (
      <>
        <p>Article6 Bids is for small and large organisations with a tender already in progress that want an independent final challenge before submission.</p>
        <p>That includes smaller firms bidding for an important contract, experienced internal bid teams, and larger organisations coordinating multiple contributors, schedules and supporting documents.</p>
        <p>We add an independent evaluator-side assurance layer. We do not replace your bid team.</p>
      </>
    ),
  },
  {
    question: 'What is your tender review process?',
    answer: (
      <>
        <p>We start with the buyer&apos;s documents and evaluation criteria, then test the submission against them.</p>
        <p>We review requirement coverage, evidence, compliance, consistency and scoring risk, then turn the findings into prioritised actions your team can resolve before submission.</p>
        <p>The objective is assurance, not rewriting.</p>
      </>
    ),
  },
  {
    question: 'What if my tender is due soon?',
    answer: (
      <>
        <p>Send us the current draft and deadline.</p>
        <p>For short review windows, we prioritise findings as:</p>
        <div className="faq-priority-grid">
          <div><strong>Must do</strong><p>Issues that could materially affect compliance, score or evaluator confidence.</p></div>
          <div><strong>Do if time allows</strong><p>Useful improvements with lower evaluation impact.</p></div>
          <div><strong>Do not spend time on</strong><p>Cosmetic changes unlikely to affect the result.</p></div>
        </div>
        <p>We confirm whether there is enough time for a useful review before accepting the engagement.</p>
      </>
    ),
  },
  {
    question: 'What does an evaluator actually need to see in a high-scoring tender response?',
    answer: (
      <>
        <p>The evaluator needs clear answers to the published requirements, relevant evidence for important claims and credible delivery commitments.</p>
        <p>They should not have to infer why your experience deserves marks or reconstruct the answer from several documents.</p>
        <p>Strong bids make the route from requirement to evidence to score easy to follow.</p>
      </>
    ),
  },
  {
    question: 'Do I need this if I already have an internal review team?',
    answer: (
      <>
        <p>Potentially, yes.</p>
        <p>Internal teams naturally know the company, solution and reasoning behind the response. That context can make gaps difficult to see.</p>
        <p>An independent reviewer sees only what the evaluator will see and tests whether the intended evidence and commitments actually made it into the submission.</p>
      </>
    ),
  },
  {
    question: 'How can you tell whether a strong tender might still lose marks?',
    answer: (
      <>
        <p>Look for gaps between what the bidder knows and what the evaluator can score.</p>
        <p>Typical risks include partially answered criteria, unsupported claims, weak examples, inconsistent dates or commitments, unclear implementation detail and evidence that exists but is not clearly connected to the scored question.</p>
        <p>A strong company can still submit a weakly evidenced answer.</p>
      </>
    ),
  },
  {
    question: 'How do you review a tender from the buyer or evaluator\'s point of view?',
    answer: (
      <>
        <p>We start with what the buyer has asked for, how it will be scored and what evidence or outputs are expected.</p>
        <p>Then we test the draft against that framework.</p>
        <p><strong>What can the evaluator actually award marks for based on what is written and evidenced here?</strong></p>
      </>
    ),
  },
  {
    question: 'What are the most common problems in otherwise good tender submissions?',
    answer: (
      <>
        <p>Common risks include missed parts of multi-part questions, generic evidence, examples without measurable outcomes, unclear responsibilities, inconsistent commitments, weak implementation detail and important information that is difficult for the evaluator to find.</p>
        <p>These are often assurance problems rather than writing problems.</p>
      </>
    ),
  },
  {
    question: 'What is the difference between bid writing and independent bid assurance?',
    answer: (
      <>
        <p>Bid writing develops the response.</p>
        <p>Independent bid assurance tests an existing response against the buyer&apos;s requirements, evaluation criteria, evidence expectations and submission rules.</p>
        <p>We challenge the submission and identify what needs attention. Your team retains ownership of the final response.</p>
      </>
    ),
  },
  {
    question: 'How do I get started?',
    answer: (
      <>
        <p>Send us your current draft together with the tender name or reference and the submission deadline.</p>
        <p>Include the buyer documents and evaluation criteria where available.</p>
        <p>We review the package, confirm whether the timing and scope are workable, and take it from there.</p>
      </>
    ),
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="sample-hero">
        <div className="site-shell sample-narrow">
          <p className="eyebrow">Tender review FAQ</p>
          <h1>Tender review and bid assurance questions</h1>
          <p className="lead">Practical answers about independent evaluator-side review, evidence, scoring risk, tight deadlines and final pre-submission assurance.</p>
        </div>
      </section>

      <section className="section muted-section">
        <div className="site-shell sample-narrow faq-list">
          {faqs.map((faq, index) => (
            <article className="faq-item" key={faq.question}>
              <small>{String(index + 1).padStart(2, '0')}</small>
              <h2>{faq.question}</h2>
              <div className="faq-answer">{faq.answer}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="site-shell sample-narrow">
          <p className="eyebrow">Have a tender in progress?</p>
          <h2>Send us the draft.</h2>
          <div className="cta-row">
            <Link href="/#review" className="cta-primary">Send us the draft</Link>
            <Link href="/sample-review" className="cta-secondary">See the sample review</Link>
          </div>
        </div>
      </section>
    </>
  );
}
