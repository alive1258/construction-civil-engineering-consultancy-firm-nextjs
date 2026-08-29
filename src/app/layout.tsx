import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/src/lib/providers/Providers";
import ToastProvider from "../components/Common/ToastProvider/ToastProvider";

// ✅ Font Optimization
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// ✅ SEO Metadata
// NOTE: metadataBase/canonical use a placeholder domain — swap in the
// real domain once one is registered/deployed.
export const metadata: Metadata = {
  metadataBase: new URL("https://meridian-engineering.com"),

  title: {
    default: "Meridian Engineering & Consultancy",
    template: "%s | Meridian Engineering & Consultancy",
  },

  description:
    "Integrated engineering, architecture, and civil consultancy services delivering innovative, sustainable, and technically sound solutions for complex projects.",

  keywords: [
    "engineering consultancy",
    "civil engineering",
    "structural engineering",
    "architecture firm",
    "BIM services",
    "project management consultancy",
  ],

  authors: [{ name: "Meridian Engineering & Consultancy" }],
  creator: "Meridian Engineering & Consultancy",
  publisher: "Meridian Engineering & Consultancy",

  category: "business",

  // ✅ Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: "Meridian Engineering & Consultancy",
    description:
      "Integrated engineering, architecture, and civil consultancy services for complex, sustainable projects.",
    url: "https://meridian-engineering.com",
    siteName: "Meridian Engineering & Consultancy",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1600,
        height: 1000,
        alt: "Meridian Engineering & Consultancy",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Twitter SEO
  twitter: {
    card: "summary_large_image",
    title: "Meridian Engineering & Consultancy",
    description:
      "Integrated engineering, architecture, and civil consultancy services for complex, sustainable projects.",
    images: ["/images/hero-bg.jpg"],
  },

  // ✅ Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ✅ Canonical
  alternates: {
    canonical: "https://meridian-engineering.com",
  },

  // ✅ Icons
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },

  // ✅ App Info
  applicationName: "Meridian Engineering & Consultancy",
  referrer: "origin-when-cross-origin",

  // ✅ Format detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${plexSans.variable} font-sans antialiased bg-white text-brand-900`}
      >
        <Providers>
          {children}
          <ToastProvider />
        </Providers>
      </body>
    </html>
  );
}
