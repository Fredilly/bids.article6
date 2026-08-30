import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import BidsHeader from '../components/BidsHeader';
import BidsFooter from '../components/BidsFooter';

const siteUrl = 'https://bids.article6.org';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Article6 Bids | Independent Pre-Submission Tender Review',
  description: 'Independent pre-submission review of tenders and bids against buyer requirements, scoring criteria and requested evidence.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Article6 Bids',
    title: 'Article6 Bids | Independent Pre-Submission Tender Review',
    description: 'Check whether your tender actually gives the buyer what they need to score before you submit.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <BidsHeader />
        <main>{children}</main>
        <BidsFooter />
        <Analytics />
      </body>
    </html>
  );
}
