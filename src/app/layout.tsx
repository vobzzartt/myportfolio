import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: 'Victor Bodude | Software Engineer',
  description: '18-year-old Nigerian Software Developer with 2+ years of experience in web, cloud, cybersecurity, AI, and app development. Passionate about building real-world solutions.',
  keywords: ['Victor Bodude', 'Software Developer', 'Web Development', 'Cybersecurity', 'Cloud Computing', 'AI Developer', 'App Developer', 'Nigerian Tech'],
  authors: [{ name: 'Victor Bodude' }],
  creator: 'Victor Bodude',
  publisher: 'Victor Bodude',
  verification: {
    google: '3DGKgaVSClkxVxfy9Mw9sVhD2c9RjZuF3q1dbmQYkb8',
  },
  openGraph: {
    title: 'Victor Bodude | Software Engineer',
    description: 'Nigerian Software Developer building powerful, scalable products.',
    url: 'https://victorbodude.name.ng',
    siteName: 'Victor Bodude Portfolio',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Victor Bodude - Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Victor Bodude | Software Engineer',
    description: 'Passionate Software Developer with 2+ years of experience.',
    creator: '@vobzzartt',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  themeColor: '#6f1cd7',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Victor Bodude',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="3DGKgaVSClkxVxfy9Mw9sVhD2c9RjZuF3q1dbmQYkb8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Victor Bodude",
                "url": "https://victorbodude.name.ng",
                "image": "https://victorbodude.name.ng/images/hero.png",
                "sameAs": [
                  "https://x.com/vobzzartt",
                  "https://www.instagram.com/vobzzartt",
                  "https://www.linkedin.com/in/victorbodude",
                  "https://github.com/victorbodude"
                ],
                "jobTitle": "Software Engineer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Self-employed"
                },
                "description": "18-year-old Nigerian Software Developer with 2+ years experience in web, cloud, security, and AI development. Entrepreneur, speaker, and mentor."
              }
            `,
          }}
        />
      </Head>
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
