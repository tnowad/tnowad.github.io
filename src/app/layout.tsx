import Background from "@/components/Background";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nguyen Minh Tuan",
  description: "Personal website and portfolio of Nguyen Minh Tuan.",
  viewport: "width=device-width, initial-scale=1.0",
  authors: { name: "Nguyen Minh Tuan", url: "https://github.com/tnowad" },
  creator: "Nguyen Minh Tuan",
  keywords: ["portfolio", "web development", "React", "Next.js"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background className="min-h-screen bg-white-bg dark:bg-black">
          {children}
        </Background>
      </body>
    </html>
  );
}
