import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway, Poppins, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvidersContext } from '../provider/theme-provider';
import { GoogleTagManager } from '@next/third-parties/google';
import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { Clients } from "@/components/clients";
import { CTA } from "@/components/cta";
import { LoadingBar } from "@/components/loading";
import { Suspense } from "react";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add weights as needed
});

export const metadata: Metadata = {
  title: "Codefeast",
  description: "Codefeast",
  icons: {
    icon: '/favicon.png'
  }
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <body
        className={`${poppins.variable} ${raleway.variable} ${geistSans.variable} ${geistMono.variable} ${ibmPlexSans.variable} antialiased`}
      >
        <ThemeProvidersContext >
          <Suspense fallback={<div>Loading...</div>}>
            <LoadingBar />
          </Suspense>
          <Navbar />
          {children}

          <Clients />
          <CTA />
          <Footer />
        </ThemeProvidersContext>
      </body>
    </html>
  );
}
