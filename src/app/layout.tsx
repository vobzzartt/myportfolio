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
  title: "Victor Bodude | Software Engineer, Cloud & Web Developer in Nigeria & Global Innovator",
  description:
    "Victor Bodude — Software Engineer, Cloud Developer, and Web Developer from Nigeria. Specializing in AI, Automation, Cloud Computing, and scalable software solutions for startups, enterprises, and innovators worldwide.",
  keywords: [
    // Core roles
    "Software Engineer",
    "Web Developer",
    "Cloud Engineer",
    "AI Developer",
    "Full Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "Mobile App Developer",
    "App Developer",
    "Tech Innovator",
    "Automation Engineer",
    "IT Specialist",
    "Software Architect",
    "System Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Laravel Developer",
    "PHP Developer",
    "Python Developer",
    "COBOL Developer",
    "DevOps Engineer",
    "API Developer",
    "Blockchain Developer",
    "Cybersecurity Specialist",

    // Regional targeting
    "Software Engineer Nigeria",
    "Web Developer Nigeria",
    "Cloud Engineer Nigeria",
    "AI Developer Nigeria",
    "App Developer Lagos",
    "Top Software Engineer Africa",
    "Youngest Developer Nigeria",
    "Best Nigerian Software Engineer",
    "African Software Developer",
    "Hire Developer in Nigeria",
    "Hire Software Engineer in Africa",
    "Remote Developer Nigeria",
    "Freelance Web Developer Nigeria",
    "Full Stack Engineer Lagos",
    "Top Tech Talent Nigeria",
    "Tech Entrepreneur Africa",
    "Tech Expert Nigeria",
    "Digital Solutions Nigeria",
    "Nigerian Tech Innovator",
    "Nigerian Developer Portfolio",
    "Victor Bodude Developer Portfolio",

    // Services
    "Software Development",
    "Cloud Solutions",
    "Web Application Development",
    "AI & Machine Learning Developer",
    "Mobile App Development",
    "Automation Systems",
    "API Integration",
    "Database Developer",
    "Ecommerce Developer",
    "Enterprise Software Developer",
    "Fintech Developer",
    "SaaS Application Developer",
    "Custom Software Solutions",
    "Website Optimization",
    "SEO Developer",
    "API Engineer",
    "Frontend Development Expert",
    "Backend Engineer for Hire",

    // Freelance and business
    "Hire Software Engineer",
    "Hire Web Developer",
    "Hire Cloud Engineer",
    "Hire Freelance Developer",
    "Freelance Software Engineer Remote",
    "Best Freelance Developer Africa",
    "Top Web Developer Portfolio",
    "Trusted Software Engineer",
    "Tech Consultant Nigeria",
    "Tech Startup Engineer",
    "Founder Developer Africa",
    "Entrepreneur & Engineer",

    // Brand
    "Victor Bodude",
    "Big7 Technologies",
    "ServAfri",
    "BigBoost Media Hub",
    "Software Engineer Portfolio",
    "Victor Bodude Portfolio Website",
    "Victor Bodude Tech Innovator",
    "Victor Bodude Cloud Engineer",
    "Victor Bodude Web Developer",
    "Victor Bodude AI Developer"
  ],
  authors: [{ name: "Victor Bodude" }],
  creator: "Victor Bodude",
  publisher: "Victor Bodude",
  verification: {
    google: "3DGKgaVSClkxVxfy9Mw9sVhD2c9RjZuF3q1dbmQYkb8",
  },
  openGraph: {
    title: "Victor Bodude | Software Engineer, Cloud & Web Developer in Nigeria & Global Innovator",
    description:
      "Building scalable, high-performance digital products with AI, Cloud, and Web technologies — empowering startups and global businesses.",
    url: "https://victorbodude.name.ng",
    siteName: "Victor Bodude Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Victor Bodude - Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Bodude | Software Engineer, Cloud & Web Developer",
    description:
      "Hire Victor Bodude — the young Nigerian Software Engineer passionate about Cloud, Web, and AI innovation.",
    creator: "@vobzzartt",
    images: ["/og.png"],
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
  themeColor: "#6f1cd7",
  // Favicon completely disabled
  icons: {},
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Victor Bodude",
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
                "jobTitle": "Software Engineer, Cloud & Web Developer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Big7 Technologies"
                },
                "description": "Victor Bodude, a young Nigerian Software Engineer and Tech Innovator, builds powerful, scalable, and intelligent software solutions in Web, Cloud, and AI technologies.",
                "knowsAbout": ["Software Engineering", "Cloud Computing", "AI Development", "Web Development", "Mobile App Development", "Automation", "Startup Development", "Cybersecurity"],
                "nationality": "Nigerian"
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