import "./globals.css"; 

export const metadata = {
  title: "MMB Yazılım | Web, SEO, Performans",
  description: "Next.js tabanlı, SEO odaklı ajans sitesi.",
  metadataBase: new URL("https://www.mmbyazilim.com"),
  openGraph: { title: "MMB Yazılım", description: "Web • SEO • Performans", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-dvh bg-white text-slate-900">
        <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
            <a className="font-bold">MMB Yazılım</a>
            <div className="flex gap-4 text-sm">
              <a href="/">Ana Sayfa</a>
              <a href="/hizmetler">Hizmetler</a>
              <a href="/blog">Blog</a>
              <a href="/iletisim" className="rounded-xl border px-3 py-1">İletişim</a>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl p-4">{children}</main>
        <footer className="border-t py-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} MMB Yazılım
        </footer>
      </body>
    </html>
  );
}
