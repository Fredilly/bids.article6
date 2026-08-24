import Link from 'next/link';

const tenderRisks = [
  {
    label: 'A requirement is only partly answered',
    copy: 'The response addresses the topic but misses one of the specific points, conditions or sub-questions the buyer asked for.',
  },
  {
    label: 'A claim is credible but unsupported',
    copy: 'Your team knows the statement is true, but the evaluator cannot see the case study, metric, result or document that proves it.',
  },
  {
    label: 'The evidence is there but hard to score',
    copy: 'Relevant proof exists somewhere in the response or attachments, but the evaluator has to work to connect it to the scored requirement.',
  },
  {
    label: 'Different answers tell different stories',
    copy: 'Separate contributors, sections or attachments use inconsistent figures, commitments, terminology or delivery assumptions.',
  },
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
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-forest-600">Independent pre-submission review</p>
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-gray-950 md:text-5xl lg:text-6xl">
                Your tender is written. But is everything the buyer needs to score actually there?
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
                Your team knows the business. The evaluator only knows what is in the submission. We independently review the draft against the buyer&apos;s requirements, scoring criteria and requested evidence before you submit.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#review" className="preview-primary-cta">Review my tender</Link>
                <Link href="#what-we-check" className="preview-secondary-cta">See what we check</Link>
              </div>
              <p className="mt-5 max-w-xl text-xs leading-5 text-gray-400">
                Independent final scrutiny. Your team keeps control of the response.
              </p>
            </div>

            <div className="mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end">
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.3)]">
                <div className="bg-forest-950 px-6 py-7 text-white">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-forest-300">Article6 Bids</p>
                      <p className="mt-2 text-lg font-semibold tracking-tight">Pre-submission review finding</p>
                    </div>
                    <span className="rounded-full border border-forest-700 px-2.5 py-1 text-[10px] uppercase tracking-wide text-forest-200">Illustrative</span>
                  </div>
                </div>
                <div className="divide-y divide-gray-100">
                  {findings.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[110px_1fr] gap-4 px-6 py-4 text-sm">
                      <span className="text-gray-400">{label}</span>
                      <span className="font-medium text-gray-800">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 px-6 py-4 text-xs leading-5 text-gray-500">
                  The point is not to rewrite your bid. It is to identify what an evaluator may struggle to award marks for.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-review" className="scroll-mt-20 border-y border-gray-200 bg-[#fbfcfb]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-forest-600">The hidden risk</p>
            <h2 className="text-3xl font-bold tracking-[-0.025em] text-gray-950 md:text-4xl">A strong business can still submit a weak bid.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
              A response can sound convincing and still lose marks because something the buyer asked for is missing, difficult to find, inconsistent or unsupported.
            </p>
          </div>

          <div className="mt-12 border-y border-gray-200">
            {tenderRisks.map((risk, index) => (
              <div key={risk.label} className="grid gap-3 border-b border-gray-200 py-7 last:border-b-0 md:grid-cols-[64px_300px_1fr] md:items-start md:gap-8">
                <span className="text-xs font-semibold tabular-nums text-gray-300">0{index + 1}</span>
                <h3 className="text-base font-semibold text-gray-900">{risk.label}</h3>
                <p className="max-w-2xl text-sm leading-6 text-gray-600">{risk.copy}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl border-l-2 border-forest-600 pl-5 text-base font-medium leading-7 text-gray-800">
            Your capability is not what gets scored. The submission is.
          </p>
        </div>
      </section>

      <section className="bg-forest-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-16 md:py-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-forest-300">The evaluator&apos;s side</p>
            <h2 className="text-3xl font-bold tracking-[-0.025em] md:text-4xl">We read it from the buyer&apos;s side of the table.</h2>
          </div>
          <div>
            <p className="text-base leading-7 text-forest-100 md:text-lg">
              We do not ask whether the bid simply sounds good. We ask what the buyer requested, what they are scoring, where the supporting evidence sits, and whether the evaluator can award the marks from what is actually written.
            </p>
            <p className="mt-7 text-sm font-semibold tracking-wide text-white">
              What was asked? What is being scored? Where is the proof? Can the evaluator see it?
            </p>
          </div>
        </div>
      </section>

      <section id="what-we-check" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-forest-600">What we check</p>
            <h2 className="text-3xl font-bold tracking-[-0.025em] text-gray-950 md:text-4xl">Every requirement. Every claim. Every piece of evidence.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
              The review is tied back to the buyer&apos;s own documents, not a generic writing checklist.
            </p>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {checks.map(([title, copy], index) => (
              <div key={title} className="border-t border-gray-300 pt-5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-forest-600">0{index + 1}</span>
                <h3 className="mt-2 text-base font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-[#fbfcfb]">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-forest-600">What you receive</p>
            <h2 className="text-3xl font-bold tracking-[-0.025em] text-gray-950 md:text-4xl">You receive the problems. Not another rewritten tender.</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
              We identify what may cost the submission marks, explain why it matters and give your team a clear action to resolve it before the deadline.
            </p>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {deliverables.map(([title, copy]) => (
              <div key={title} className="border-t border-gray-300 pt-5">
                <h3 className="text-base font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600">{copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-forest-200 bg-forest-50/70 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest-700">Independent final challenge</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-950">You know your business. We check whether the submission proves it.</h3>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-700">
              Article6 does not take ownership of the bid or replace your internal team, bid writer or subject-matter experts. The review gives them an independent view of what an evaluator may see before the submission becomes final.
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-forest-600">How it works</p>
            <h2 className="text-3xl font-bold tracking-[-0.025em] text-gray-950 md:text-4xl">One final review before the buyer sees it.</h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
            <div className="grid divide-y divide-gray-200 md:grid-cols-4 md:divide-x md:divide-y-0">
              {[
                ['01', 'Send the tender', 'Buyer documents, draft response and submission deadline.'],
                ['02', 'We review it', 'Requirements, scoring criteria, evidence, compliance and consistency.'],
                ['03', 'You receive findings', 'Prioritised gaps with the reason and required action.'],
                ['04', 'Your team decides', 'You retain ownership and make the final submission changes.'],
              ].map(([number, title, copy]) => (
                <div key={number} className="px-5 py-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-forest-600">{number}</span>
                  <p className="mt-2 text-sm font-semibold leading-5 text-gray-800">{title}</p>
                  <p className="mt-2 text-xs leading-5 text-gray-500">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="review" className="scroll-mt-20 bg-forest-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-forest-300">Before you submit</p>
            <h2 className="text-3xl font-bold tracking-[-0.025em] md:text-5xl">The buyer gets one final version. Know what is in it before you send it.</h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-forest-100 md:text-lg">
              Send us the tender title, buyer, deadline and a short note about where the draft stands. We will confirm whether the review is a fit before any documents are shared.
            </p>
            <div className="mt-8">
              <a
                href="mailto:fredilly@article6.org?subject=Article6%20Bids%20-%20Tender%20Review"
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-forest-900 shadow-sm transition-colors hover:bg-forest-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Request a review
              </a>
            </div>
            <p className="mt-5 max-w-xl text-xs leading-5 text-forest-300">
              Commercially sensitive documents should only be shared after scope and handling are confirmed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
