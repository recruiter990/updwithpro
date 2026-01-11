import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Xerosofro | Trasformiamo il Tuo Business",
  description: "Social Media Marketing, Cold Email e Crescita Digitale per Business Locali. Più Clienti, Più Vendite, Più Crescita.",
  keywords: "marketing digitale, social media, email marketing, business locale, data intelligence",
  authors: [{ name: "Xerosofro" }],
  openGraph: {
    title: "Xerosofro | Trasformiamo il Tuo Business",
    description: "Social Media Marketing, Cold Email e Crescita Digitale per Business Locali",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={`${inter.variable} font-body antialiased`}>
        <GoogleAnalytics />
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}

