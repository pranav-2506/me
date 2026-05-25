import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranav Chandar — Frontend Engineer",
  description:
    "Senior frontend engineer building premium digital experiences.",
  keywords: ["frontend", "engineer", "design", "react", "next.js"],
  authors: [{ name: "Pranav Chandar" }],
  openGraph: {
    title: "Pranav Chandar",
    description:
      "Senior frontend engineer building premium digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}
