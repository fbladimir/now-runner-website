import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Now Runner - Get Help Fast",
  description: "From battery jumps to room cleaning, Now Runner connects you with real people who can help — instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
