import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Article6 Bids",
  description: "Independent pre-submission tender and bid review.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
