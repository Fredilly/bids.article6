'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { href: '/#why-review', label: 'Why Review' },
  { href: '/#what-we-check', label: 'What We Check' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#review', label: 'Request Review' },
];

export default function BidsHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="site-shell nav">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">A6</span>
          <span>Article6 Bids</span>
        </Link>

        <div className="nav-links">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <Link href="/#review" className="cta-primary">Review my tender</Link>
        </div>

        <button type="button" aria-expanded={open} aria-controls="bids-mobile-menu" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)} className="menu-button">
          {open ? '×' : '☰'}
        </button>
      </nav>

      <div id="bids-mobile-menu" className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        <Link href="/#review" onClick={() => setOpen(false)} className="cta-primary">Review my tender</Link>
      </div>
    </header>
  );
}
