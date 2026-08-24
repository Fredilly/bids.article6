import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Article6 Bids | Independent pre-submission tender review",
  description:
    "Independent pre-submission review of tenders and bids against buyer requirements, scoring criteria, evidence, and compliance before submission.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
