import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ShopProvider } from "@/context/ShopContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://archiesbypriyanka.vercel.app"),
  title: "Archie's by Priyanka | Luxury Handcrafted Swimwear & Resort Wear Mumbai",
  description:
    "Discover high-fashion handcrafted luxury swimwear, monokinis, bikinis, mesh cutouts, and resortwear designed for confidence by Priyanka in Mumbai. Worldwide luxury shipping.",
  keywords: [
    "Archies by Priyanka",
    "Luxury Swimwear Mumbai",
    "Designer Bikinis",
    "Resortwear India",
    "OYE Swimwear Style",
    "High Fashion Swimsuits",
    "Monokinis",
  ],
  authors: [{ name: "Priyanka - Archie's by Priyanka" }],
  creator: "Archie's by Priyanka",
  openGraph: {
    title: "Archie's by Priyanka | Luxury Swimwear & Resort Wear",
    description: "Swimwear designed for confidence. Bespoke handcrafted luxury bikinis & monokinis.",
    url: "https://archiesbypriyanka.vercel.app",
    siteName: "Archie's by Priyanka",
    images: [
      {
        url: "/images/hero_beach_luxury.jpg",
        width: 1200,
        height: 630,
        alt: "Archie's by Priyanka Luxury Swimwear Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archie's by Priyanka | Luxury Swimwear",
    description: "Bespoke handcrafted luxury swimwear designed for confidence.",
    images: ["/images/hero_beach_luxury.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import SmoothScrolling from "@/components/SmoothScrolling";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans bg-[#F5EFE6] text-[#1E332D] antialiased selection:bg-[#1E332D] selection:text-[#F5EFE6] m-0 p-0" suppressHydrationWarning>
        <SmoothScrolling>
          <ShopProvider>
            {children}
          </ShopProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}

