import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { HeaderMain } from "@/components/HeaderMain";
import { ProductsBuyProvider } from "@/context/productsBuy";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cappuccino",
  description: "Cappuccino",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderMain />
        <ProductsBuyProvider>{children}</ProductsBuyProvider>
        <Footer />
      </body>
    </html>
  );
}
