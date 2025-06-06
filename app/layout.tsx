import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ErrorBoundary from './components/ErrorBoundary'
import ClientErrorHandler from './components/ClientErrorHandler'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NV School - Excellence in Education",
  description: "A modern, interactive school website providing quality education with innovative teaching methods. Explore our curriculum, faculty, events, and more.",
  keywords: "school, education, curriculum, faculty, students, academics, events",
  authors: [{ name: "NV School" }],
  robots: "index, follow",
  openGraph: {
    title: "NV School - Excellence in Education",
    description: "A modern, interactive school website providing quality education with innovative teaching methods.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen`}
      >
        <ClientErrorHandler />
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
