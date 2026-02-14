import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aunova | Modular EHR Software for Africa",
  description: "Clinician-led Electronic Health Record software built for healthcare professionals across Africa. Choose the modules you need - patient information, AI integration, analytics, and more.",
  keywords: ["EHR", "Electronic Health Record", "healthcare software", "medical software", "Africa", "patient management", "clinic software"],
  openGraph: {
    title: "Aunova | Modular EHR Software for Africa",
    description: "Clinician-led Electronic Health Record software built for healthcare professionals across Africa.",
    siteName: "Aunova",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aunova | Modular EHR Software for Africa",
    description: "Clinician-led Electronic Health Record software built for healthcare professionals across Africa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
