import Link from 'next/link';

export default function BidsFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <Link href="/" className="brand">
          <span className="brand-mark">A6</span>
          <span>Article6 Bids</span>
        </Link>
        <p>Independent pre-submission review for tenders and bids.</p>
        <p className="fine">We review the submission against the buyer&apos;s stated requirements, scoring criteria and requested evidence. Your team retains ownership of the final response.</p>
        <div className="footer-links">
          <Link href="/#why-review">Why Review</Link>
          <Link href="/#what-we-check">What We Check</Link>
          <Link href="/#how-it-works">How It Works</Link>
          <Link href="/#review">Request Review</Link>
        </div>
        <div className="copyright">© {new Date().getFullYear()} Article6. All rights reserved.</div>
      </div>
    </footer>
  );
}
