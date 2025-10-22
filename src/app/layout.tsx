import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DarkVeil from "@/components/Background";


export const metadata: Metadata = {
  title: "MMB Yazılım | Web, SEO, Performans",
  description: "Next.js tabanlı, SEO odaklı ajans sitesi.",
  metadataBase: new URL("https://www.mmbyazilim.com"),
  openGraph: {
    title: "MMB Yazılım",
    description: "Web • SEO • Performans",
    type: "website",
    url: "https://www.mmbyazilim.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hizmetler", href: "/hizmetler" },
    { label: "Blog", href: "/blog" },
    { label: "İletişim", href: "/iletisim" },
  ];

  return (
    <html lang="tr">
      <body className="relative min-h-screen overflow-x-hidden text-white">
        {/* Arka plan */}
        <div className="fixed inset-0 z-0">
          <DarkVeil />
        </div>

        {/* İçerik */}
        <div className="relative z-10">
          <Navbar />
          <main className="mx-auto max-w-6xl p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
