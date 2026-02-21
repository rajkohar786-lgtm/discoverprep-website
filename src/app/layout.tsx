import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAds } from "@/components/analytics/google-ads";
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
  title: "Canadian Citizenship Test 2026 - Study App with Audio Podcasts | DiscoverPrep",
  description: "Pass your Canadian Citizenship Test on the first try with DiscoverPrep. Audio podcasts, interactive lessons, and mock exams based on the official Discover Canada guide. Free download for iOS.",
  keywords: [
    "Canadian citizenship test",
    "Canadian citizenship test 2026",
    "citizenship test Canada",
    "Discover Canada study guide",
    "Canadian citizenship exam",
    "citizenship test practice",
    "Canadian citizenship test questions",
    "citizenship test app",
    "Canadian citizenship test preparation",
    "citizenship test study material",
    "Canadian citizenship test audio",
    "citizenship test podcast",
    "Canadian citizenship mock exam",
    "Discover Canada practice test",
    "Canadian citizenship test free",
  ],
  authors: [{ name: "Kohar Inc." }],
  creator: "DiscoverPrep",
  publisher: "Kohar Inc.",
  metadataBase: new URL("https://discoverprep.ca"),
  alternates: {
    canonical: "https://discoverprep.ca",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://discoverprep.ca",
    siteName: "DiscoverPrep",
    title: "Canadian Citizenship Test 2026 - Pass with Confidence | DiscoverPrep",
    description: "The only Canadian Citizenship Test app with audio podcasts. Turn your commute into study time. Based on the official Discover Canada guide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DiscoverPrep - Canadian Citizenship Test Study App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canadian Citizenship Test 2026 - Study App | DiscoverPrep",
    description: "Pass your Canadian Citizenship Test with audio podcasts, interactive lessons, and mock exams. Free iOS app.",
    images: ["/og-image.png"],
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
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  category: "Education",
  applicationName: "DiscoverPrep",
  appleWebApp: {
    capable: true,
    title: "DiscoverPrep",
    statusBarStyle: "black-translucent",
  },
  appLinks: {
    ios: {
      url: "https://apps.apple.com/ca/app/discoverprep-citizenship-2026/id6755275035",
      app_store_id: "6755275035",
    },
  },
  other: {
    "apple-itunes-app": "app-id=6755275035",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAds />
        {children}
      </body>
    </html>
  );
}
