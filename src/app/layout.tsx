import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import PillNav from "@/components/navbar";

export const metadata: Metadata = {
  title: "MMB Yazılım | Web, SEO, Performans",
  description: "Next.js tabanlı, SEO odaklı ajans sitesi.",
  metadataBase: new URL("https://www.mmbyazilim.com"),
  openGraph: {
    title: "MMB Yazılım",
    description: "Web • SEO • Performans",
    type: "website",
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
      <body className="min-h-dvh bg-white text-slate-900">
        {/*
         Header 
        <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
            <a className="font-bold">MMB Yazılım</a>
            <div className="flex gap-4 text-sm">
              <a href="/">Ana Sayfa</a>
              <a href="/hizmetler">Hizmetler</a>
              <a href="/blog">Blog</a>
              <a
                href="/iletisim"
                className="rounded-xl border px-3 py-1"
              >
                İletişim
              </a>
            </div>
          </nav>
        </header>
        */}

        {/* Navbar */}
        <PillNav logo="/logo.svg" items={navItems} />


        {/* Page content */}
        <main className="mx-auto max-w-6xl p-4">{children}</main>

        {/* Footer component */}
        <Footer />
      </body>
    </html>
  );
}
