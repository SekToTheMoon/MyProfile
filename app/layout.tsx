import type { Metadata } from "next";
import { JetBrains_Mono, Anuphan } from "next/font/google";
import "./globals.css";
import Header from "@/components/util/header";
import PageTransition from "@/components/PageTransition";
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
const anuphan = Anuphan({
  subsets: ["latin"],
  variable: "--font-anuphan",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "แฟ้มสะสมผลงาน",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${anuphan.variable} antialiased`}
      >
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
