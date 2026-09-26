import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SITE } from "@/lib/constants";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Personal Training & Coaching in ${SITE.city}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Premium Personal Training in München: Muskelaufbau, Fettabbau, Ernährungsberatung und Online Coaching. Jetzt kostenloses Beratungsgespräch buchen.",
  keywords: [
    "Personal Trainer München",
    "Fitness Coach",
    "Muskelaufbau",
    "Fettabbau",
    "Ernährungsberatung",
    "Online Coaching",
  ],
  authors: [{ name: SITE.trainer }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} – Personal Training & Coaching`,
    description:
      "Individuelles 1:1 Coaching für nachhaltige Transformation.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${outfit.variable} ${syne.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
