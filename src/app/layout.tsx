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
      <body>{children}</body>
    </html>
  );
}
