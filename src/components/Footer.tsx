// src/components/Footer.tsx
import Link from "next/link";

type NavItem = { label: string; href: string };
type Column = { title: string; items: NavItem[] };

const year = new Date().getFullYear();

const columns: Column[] = [
  {
    title: "Şirket",
    items: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Kariyer", href: "/kariyer" },
      { label: "Ekibimiz", href: "/ekip" },
    ],
  },
  {
    title: "Hizmetler",
    items: [
      { label: "SEO", href: "/hizmetler/seo" },
      { label: "Dijital Reklam", href: "/hizmetler/reklam" },
      { label: "Web Geliştirme", href: "/hizmetler/web-gelistirme" },
      { label: "Kurumsal Kimlik", href: "/hizmetler/kurumsal-kimlik" },
    ],
  },
  {
    title: "Kaynaklar",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "SSS", href: "/sss" },
      { label: "Gizlilik", href: "/gizlilik" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Top row */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand / Contact */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 ring-1 ring-white/20" />
              <span className="text-lg font-semibold text-white">MMB Yazılım</span>
            </div>
            <p className="mt-4 text-sm text-neutral-400">
              Performans odaklı web & growth çözümleri.
            </p>

            <ul className="mt-4 space-y-1 text-sm">
              <li><a href="mailto:info@mmbyazilim.com" className="hover:text-white">info@mmbyazilim.com</a></li>
              <li><a href="tel:+905000000000" className="hover:text-white">+90 (5xx) xxx xx xx</a></li>
              <li>İstanbul • Bursa • Konya • Antalya</li>
            </ul>

            {/* Socials (opsiyonel, SVG ikonlar basit) */}
            <div className="mt-4 flex gap-3">
              <a aria-label="LinkedIn"
                 href="https://www.linkedin.com"
                 className="rounded-lg border border-white/10 p-2 hover:border-white/30">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.8v2.2h.05c.53-1.01 1.84-2.2 3.78-2.2 4.04 0 4.79 2.66 4.79 6.12V24h-4v-7.1c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.73 1.84-2.73 3.75V24h-4z"/></svg>
              </a>
              <a aria-label="Instagram"
                 href="https://www.instagram.com"
                 className="rounded-lg border border-white/10 p-2 hover:border-white/30">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.5.6.2 1 .6 1.5 1.1s.9.9 1.1 1.5c.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.5 2.4-.2.6-.6 1-1.1 1.5s-.9.9-1.5 1.1c-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.5-.6-.2-1-.6-1.5-1.1s-.9-.9-1.1-1.5c-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.5-2.4.2-.6.6-1 1.1-1.5s.9-.9 1.5-1.1c.5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.7.4 3.9.7 3.1 1 2.4 1.4 1.7 2.1S.9 3.1.7 3.9C.4 4.7.2 5.7.1 7 0 8.3 0 8.7 0 12s0 3.7.1 5c.1 1.3.3 2.3.6 3.1.3.8.7 1.5 1.4 2.2s1.4 1.1 2.2 1.4c.8.3 1.8.5 3.1.6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.3-.3 3.1-.6.8-.3 1.5-.7 2.2-1.4s1.1-1.4 1.4-2.2c.3-.8.5-1.8.6-3.1.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.3-.6-3.1-.3-.8-.7-1.5-1.4-2.2S20.9.9 20.1.7C19.3.4 18.3.2 17 .1 15.7 0 15.3 0 12 0z"/><path d="M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8m0-2.2a8.4 8.4 0 1 1 0 16.8 8.4 8.4 0 1 1 0-16.8zM18.4 4.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 1 0 0-2.8z"/></svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-semibold text-neutral-200">{col.title}</p>
              <ul className="mt-3 space-y-2 text-sm">
                {col.items.map((it) => (
                  <li key={it.href}>
                    <Link className="hover:text-white" href={it.href}>
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-400 md:flex-row">
          <p>© {year} MMB Yazılım — Tüm hakları saklıdır.</p>
          <div className="flex gap-4">
            <Link className="hover:text-white" href="/kullanim-sartlari">Kullanım Şartları</Link>
            <Link className="hover:text-white" href="/cerez-politikasi">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
