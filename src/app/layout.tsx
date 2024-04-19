import type { Metadata } from "next";
import { Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "900"] });
import "./globals.css";

export const metadata: Metadata = {
  title: "D281 - Software House",
  description:
    "D281 is a leading software house in Brazil, specializing in creating innovative and tailored software solutions for businesses. Our team of experts is dedicated to delivering high-quality, scalable, and user-friendly applications to help your business thrive.",
  applicationName: "D281 - Software House",
  authors: [{ url: "https://d281.com.br/", name: "D281 - Software House" }],
  keywords:
    "D281, software house, Brazil, custom software, innovative solutions, scalable applications, user-friendly, React, Next.js, TypeScript, Tailwind.css",
  creator: "D281 - Software House",
  publisher: "D281 - Software House",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
