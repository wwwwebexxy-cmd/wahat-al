import type { Metadata } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import Loader from "@/components/ui/Loader";
import FloatingContact from "@/components/ui/FloatingContact";
import ScrollToTop from "@/components/ui/ScrollToTop";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.shortName} | Interior Design & Technical Services, Dubai`,
    template: `%s | ${site.legalName}`,
  },
  description: site.description,
  keywords: [
    "Interior Design Dubai",
    "Fit-out Consultants UAE",
    "Technical Services Contractor",
    "Villa Landscaping Dubai",
    "Commercial Fit-outs Dubai",
    "Al Ejaba Al Sareea",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(site.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: site.legalName,
    description: site.description,
    url: site.url,
    siteName: site.shortName,
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.legalName,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Schema.org JSON-LD for LocalBusiness (GEO & AEO optimization)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.legalName,
    alternateName: site.shortName,
    description: site.description,
    url: site.url,
    telephone: site.phone2,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.2443", // Al Karama
      longitude: "55.3056",
    },
    sameAs: [site.instagram],
    priceRange: "$$$",
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
  };

  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${manrope.variable} ${plexMono.variable} font-body antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Loader />
        {children}
        <FloatingContact />
        <ScrollToTop />
      </body>
    </html>
  );
}