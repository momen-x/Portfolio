// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import UserHeader from "./_Components/Header";
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Front End Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable}`}
    >
      <body className="backgroundContainer font-sans">
        <div className="content">
          <UserHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
