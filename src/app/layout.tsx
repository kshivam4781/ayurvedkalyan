import type { Metadata } from "next";
import { Crimson_Text, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ayurveda Wellness - Ancient Wisdom for Modern Life",
  description: "Discover the 5,000-year-old science of Ayurveda. Experience holistic wellness through natural healing practices, dosha analysis, and therapeutic treatments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonText.variable} ${notoSansDevanagari.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
