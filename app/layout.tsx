import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-vercel-domain.vercel.app"),

  title: {
    default: "Arun Perumal | Frontend Developer",
    template: "%s | Arun Perumal",
  },

  description:
    "Portfolio of Arun Perumal, a Computer Science Engineering student and Frontend Developer specializing in React, Next.js, TypeScript, MERN Stack, and modern web technologies.",

  keywords: [
    "Arun Perumal",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "MERN Stack",
    "Portfolio",
    "Web Developer",
    "Supabase",
    "MongoDB",
  ],

  authors: [
    {
      name: "Arun Perumal",
    },
  ],

  creator: "Arun Perumal",

  openGraph: {
    title: "Arun Perumal | Frontend Developer",
    description:
      "Explore my portfolio showcasing projects, skills, and experience in React, Next.js, TypeScript, MERN Stack, and modern web development.",
    url: "https://your-vercel-domain.vercel.app",
    siteName: "Arun Perumal Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Arun Perumal | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, TypeScript, MERN Stack, and modern web applications.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}