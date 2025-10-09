import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zulqurnain Ghufran | Full-Stack Developer Portfolio",
  description:
    "I'm Zulqurnain Ghufran, a full-stack developer skilled in Django and React. Explore my projects, skills, and contact info.",
  keywords: [
    "Zulqurnain Ghufran",
    "Full-Stack Developer",
    "Django Developer",
    "React Developer",
    "Next.Js Developer",
    "Portfolio",
    "Web Developer Pakistan",
  ],
  openGraph: {
    title: "Zulqurnain Ghufran | Full-Stack Developer Portfolio",
    description:
      "Full-stack web developer specializing in Django React and Next JS.",
    url: "https://yourdomain.vercel.app",
    siteName: "Zulqurnain Portfolio",
    images: [
      {
        url: "./portfolio.png", // good preview image
        width: 1200,
        height: 630,
        alt: "Portfolio of Zulqurnain Ghufran",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zulqurnain Ghufran | Full-Stack Developer",
    description: "Explore my portfolio, projects, and contact info.",
    images: ["https://yourdomain.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Zulqurnain Ghufran",
              jobTitle: "Full-Stack Developer",
              url: "https://yourdomain.vercel.app",
              sameAs: [
                "https://github.com/zulqurnain",
                "https://linkedin.com/in/zulqurnain-ghufran",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-gray-50 text-gray-900">
        {/* ✅ Fixed Navbar Spacing */}
        <Navbar />
        <main className="pt-20 px-4 md:px-8">{children}</main>
      </body>
    </html>
  );
}
