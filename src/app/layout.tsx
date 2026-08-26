import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://elvexify.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Elvexify — Software Solutions & Digital Engineering",
    template: "%s — Elvexify",
  },
  description:
    "Elvexify builds modern software solutions, web applications, digital platforms and business automation systems. We engineer solutions, not just software.",
  keywords: [
    "software engineering",
    "custom software development",
    "web application development",
    "mobile app development",
    "business process automation",
    "system integration",
    "UI/UX design",
    "data dashboards",
    "software solutions company",
  ],
  authors: [{ name: "Elvexify" }],
  creator: "Elvexify",
  applicationName: "Elvexify",
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/logo/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/logo/elvexify-icon-square.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/logo/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Elvexify",
    title: "Elvexify — Software Solutions & Digital Engineering",
    description:
      "Elevate Ideas. Engineer Possibilities. Elvexify builds modern digital solutions that turn complex business challenges into scalable, intelligent software.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvexify — Software Solutions & Digital Engineering",
    description:
      "Elevate Ideas. Engineer Possibilities. We engineer solutions, not just software.",
    creator: "@elvexify",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-base text-ink antialiased font-sans selection:bg-electric/30 selection:text-white">
        {/* Set theme + mark JS as available BEFORE paint to avoid flash.
            Dark is default; `.light` on <html> switches to light mode.
            Choice persisted in localStorage ('elvexify-theme'); falls back to
            the OS prefers-color-scheme on first visit. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('elvexify-theme');var m=window.matchMedia('(prefers-color-scheme: light)').matches;if(t==='light'||(!t&&m)){document.documentElement.classList.add('light');}}catch(e){}document.documentElement.classList.add('js');",
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-electric focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
