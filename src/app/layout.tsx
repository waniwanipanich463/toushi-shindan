import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "投資スタイル診断 | toushi-shindan",
  description: "あなたの性格や価値観から最適な投資スタイルを診断します。",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "投資スタイル診断",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { ClientLoadingWrapper } from "@/components/ui/ClientLoadingWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${inter.variable} antialiased`}>
        <ClientLoadingWrapper>
          <Header />
          {children}
          <Footer />
        </ClientLoadingWrapper>
      </body>
    </html>
  );
}
