import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import StoreProvider from "../store/StoreProvider";
import CategoryBar from "./(home)/(archive)/components/CategoryBar";
import SearchBar from "../components/bars/SearchBar";
import MenuBar from "../components/bars/MenuBar";

const inter = Noto_Sans_KR({ subsets: ["latin"] });

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
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
