import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isaiah Nazaire Resume ",
  description: "React-based resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
