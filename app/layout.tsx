import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from '../store/StoreProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "네디플",
  description: "네일아트 디자인 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <main className="w-screen min-h-screen">
            {children}
          </main>
        </StoreProvider>
      </body>
    </html>
  );
}