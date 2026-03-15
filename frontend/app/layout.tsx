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
  metadataBase: new URL("https://web-system.fujiofinnovation.com"),
  title: {
    default:
      "業務システム開発・Webシステム開発 | Fuji of Innovation",
    template: "%s | Fuji of Innovation",
  },
  description:
    "Fuji of Innovationは、予約管理・顧客管理・問い合わせ管理・会員機能・CMS構築など、業務に合わせたWebシステム開発を行います。中小企業・個人事業主向けの実用的な業務改善に対応します。",
  keywords: [
    "業務システム開発",
    "Webシステム開発",
    "予約管理システム",
    "顧客管理システム",
    "問い合わせ管理システム",
    "会員サイト構築",
    "CMS構築",
    "管理画面開発",
    "中小企業 システム開発",
    "Fuji of Innovation",
  ],
  alternates: {
    canonical: "https://web-system.fujiofinnovation.com",
  },
  openGraph: {
    title: "業務システム開発・Webシステム開発 | Fuji of Innovation",
    description:
      "予約管理、顧客管理、問い合わせ管理、会員機能、CMS構築まで。業務に合わせた実用的なWebシステムを設計・開発します。",
    url: "https://web-system.fujiofinnovation.com",
    siteName: "Fuji of Innovation",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "Fuji of Innovation 業務システム開発",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "業務システム開発・Webシステム開発 | Fuji of Innovation",
    description:
      "予約管理、顧客管理、問い合わせ管理、会員機能、CMS構築まで。業務に合わせた実用的なWebシステムを設計・開発します。",
    images: ["/ogp.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}