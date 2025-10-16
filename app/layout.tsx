import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Battle Against Limits Goku (Kaioken) | Dokkan Card Compendium",
  description:
    "Comprehensive breakdown of the Battle Against Limits Goku (Kaioken) card from Dokkan, including awakenings, stats, skills, categories, partners, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
