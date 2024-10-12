import type { Metadata } from "next";
import { siteConfig } from "@/config/site"
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/nav/nav";
import Footer from "@/components/footer/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: `${siteConfig.name} | Infrastructure for the connected world`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Infrastructure",
    "Indian DNS",
    "TOR",
    "Networking Provider",
    "System Administrator",
  ],
  authors: [
    {
      name: "Tushar Gaurav",
      url: "https://tushgaurav.in",
    },
  ],
  creator: "Tushar Gaurav",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@tushgaurav",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
