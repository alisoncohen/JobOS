import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "JobOS",
  description: "A workspace for interview preparation.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
