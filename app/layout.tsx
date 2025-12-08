import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  title: "Eyüp Fidan | Software Developer & Computer Engineer",
  description: "Eyüp Fidan's personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased selection:bg-blue-500 selection:text-white`}>
        {/* LanguageProvider ile tüm siteyi kaplıyoruz */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}