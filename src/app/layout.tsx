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
  title: 'Victor Bodude | Software Engineer & Tech Innovator',
  description: 'Victor Bodude is an 18-year-old Nigerian Software Engineer with over 2 years of experience in Web, App, AI, Cybersecurity, and Cloud development. Founder of Big7 Technologies, he is dedicated to building scalable solutions that address real-world problems.',
  keywords: [
    'Victor Bodude', 
    'Youngest Software Engineer in Nigeria', 
    'Young Software Engineer', 
    'Tech Innovator Nigeria', 
    'AI Developer Nigeria', 
    'Cloud Solutions Developer', 
    'Full Stack Developer Nigeria', 
    'App Developer Nigeria', 
    'Web Developer Nigeria', 
    'Cybersecurity Expert Nigeria', 
    'Software Engineering Nigeria', 
    'Tech Entrepreneur Nigeria', 
    'Freelance Software Developer', 
    'Building Scalable Solutions', 
    'Mobile App Development', 
    'Tech Solutions Nigeria',
    'Innovative Software Engineer', 
    'Freelance Web Developer', 
    'Big7 Technologies', 
    'ServAfri', 
    'Fintech Solutions Nigeria', 
    'Top Tech Talent Nigeria', 
    'Nigerian Software Developer for Hire', 
    'Tech Startups Nigeria', 
    'Global Software Engineer',
    'Software Solutions Innovator',
    'Nigerian AI Developer',
    'Tech Leader in Nigeria', 
    'Young Nigerian Developer',
    'Software Development for Businesses'
  ],
  authors: [{ name: 'Victor Bodude' }],
  creator: 'Victor Bodude',
  publisher: 'Victor Bodude',
  verification: {
    google: '3DGKgaVSClkxVxfy9Mw9sVhD2c9RjZuF3q1dbmQYkb8',
  },
  openGraph: {
    title: 'Victor Bodude | Software Engineer & Tech Innovator',
    description: 'Building scalable, high-performance software solutions to solve real-world problems.',
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
    title: 'Victor Bodude | Software Engineer & Tech Innovator',
    description: 'Passionate about building scalable software solutions to address real-world challenges.',
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
                  "https://github.com/vobzzartt"
                ],
                "jobTitle": "Software Engineer & Tech Innovator",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Big7 Technologies"
                },
                "description": "Victor Bodude, the youngest software engineer in Nigeria, specializes in Web, Cloud, AI, and Mobile App Development. As the founder of Big7 Technologies, he is leading innovative solutions that address real-world challenges."
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