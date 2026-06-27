import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://oks-tcg.example"),
  title: "OKS-TCG | 宝可梦卡牌、盲包及PSA评级卡",
  description:
    "马来西亚收藏卡牌商店，提供神秘盲包、热门单卡、PSA评级卡及卡盒周边，支持WhatsApp快速下单。",
  openGraph: {
    title: "OKS-TCG | 宝可梦卡牌、盲包及PSA评级卡",
    description:
      "马来西亚收藏卡牌商店，提供神秘盲包、热门单卡、PSA评级卡及卡盒周边，支持WhatsApp快速下单。",
    type: "website",
    locale: "zh_MY",
    siteName: "OKS-TCG",
    images: [
      {
        url: "/images/og.svg",
        width: 1200,
        height: 630,
        alt: "OKS-TCG black gold trading card storefront",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#05050a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
