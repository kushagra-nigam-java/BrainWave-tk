import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrainWave",
  description: "Offline Learning App",
  icons: {
    icon: "/icon.jpg",          // main favicon
    shortcut: "/icon.jpg",
    apple: "/apple-icon.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
