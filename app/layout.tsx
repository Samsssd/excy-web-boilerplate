import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Easily switch fonts by changing "Inter" to another Google Font (e.g., Outfit, Roboto, Playfair_Display)
const interSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Excy",
  description: "A basic, clean Next.js boilerplate application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
