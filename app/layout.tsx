import { Footer } from "./components/basic/Footer";
import { Navbar } from "./components/basic/Navbar";
import "../app/globals.css"
import { Metadata } from "next";
import { siteMetadata } from "../lib/seo";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata: Metadata = {
  title: {
    template: '%s | MyDigitalSpace Academy',
    default: 'MyDigitalSpace Academy - Learn Programming & Web Development',
  },
  description: siteMetadata.description,
  keywords: ['programming', 'web development', 'javascript', 'react', 'node.js', 'courses', 'learn'],
  authors: [{ name: 'MyDigitalSpace' }],
  creator: 'MyDigitalSpace',
  metadataBase: new URL(siteMetadata.url),
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteMetadata.url,
    siteName: siteMetadata.name,
    title: 'MyDigitalSpace Academy - Learn Programming & Web Development',
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: siteMetadata.name,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: siteMetadata.twitter,
    creator: siteMetadata.twitter,
    title: 'MyDigitalSpace Academy - Learn Programming & Web Development',
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },

  // Other metadata
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white text-gray-900 flex flex-col">
        <ThemeProvider>
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}