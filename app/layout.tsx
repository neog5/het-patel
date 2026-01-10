import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebars from "./components/Sidebars";
import localFont from "next/font/local";

const signature = localFont({
  src: "./fonts/holland.ttf",
  variable: "--font-signature",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Het Patel - Portfolio",
  description:
    "Het Patel's Personal Portfolio Website showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${inter.variable} ${robotoMono.variable} ${signature.variable} antialiased`}
    >
      <body>
        <Navbar />
        <Sidebars>{children}</Sidebars>
      </body>
    </html>
  );
}
