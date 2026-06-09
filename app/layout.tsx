import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Metal Matrix Equipment | Industrial Fabrication & Engineered Equipment",
    template: "%s | Metal Matrix Equipment",
  },
  description:
    "Premium fabrication, machining, and engineered equipment support for industrial clients that demand precision, responsiveness, and dependable execution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">
        <Navbar />
        <div className="flex min-h-[calc(100vh-7rem)] flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
