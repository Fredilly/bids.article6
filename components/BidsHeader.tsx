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
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-gray-900" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-md bg-forest-800 text-xs font-bold tracking-wider text-white">A6</span>
          <span>Article6 Bids</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="preview-focus-ring rounded-sm text-sm font-medium text-gray-600 transition-colors hover:text-forest-700">
              {link.label}
            </Link>
          ))}
          <Link href="/#review" className="preview-primary-cta">Review my tender</Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="bids-mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="preview-focus-ring grid min-h-11 min-w-11 place-items-center rounded-md border border-gray-200 text-lg text-gray-700 md:hidden"
        >
          {open ? '×' : '☰'}
        </button>
      </nav>

      {open && (
        <div id="bids-mobile-menu" className="border-t border-gray-200 bg-white px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium text-gray-700 hover:bg-forest-50 hover:text-forest-700">
                {link.label}
              </Link>
            ))}
            <Link href="/#review" onClick={() => setOpen(false)} className="preview-primary-cta mt-2 w-full">Review my tender</Link>
          </div>
        </div>
      )}
    </header>
  );
}
