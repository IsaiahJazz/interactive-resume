import type { Metadata } from "next";

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
    <html className="dark" lang="en">
      <body className="dark:bg-gray-800">{children}</body>
    </html>
  );
}
