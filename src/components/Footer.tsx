import Image from "next/image";
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
              {/* ✅ LOGO */}
              <Image
                src="/logo.svg"
                alt="MMB Yazılım Logo"
                width={36}
                height={36}
                className="h-9 w-9"
                priority
              />
              <span className="text-lg font-semibold text-white">
                MMB Yazılım
              </span>
            </div>

            <p className="mt-4 text-sm text-neutral-400">
              Performans odaklı web & growth çözümleri.
            </p>

            <ul className="mt-4 space-y-1 text-sm">
              <li>
                <a
                  href="mailto:mecitmert003@gmail.com"
                  className="hover:text-white"
                >
                  mecitmert003@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+905458137963" className="hover:text-white">
                  +90 545 813 79 63
                </a>
              </li>
              <li>
                Akçeşme, Zafer Cd. NO:35, 03300 Bolvadin/Afyonkarahisar
              </li>
            </ul>

            {/* Social media icons */}
            <div className="mt-4 flex gap-3">
              {/* LinkedIn */}
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/mecitmertbisgin/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 p-2 hover:border-white/30"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.8v2.2h.05c.53-1.01 1.84-2.2 3.78-2.2 4.04 0 4.79 2.66 4.79 6.12V24h-4v-7.1c0-1.69-.03-3.87-2.36-3.87-2.36 0-2.73 1.84-2.73 3.75V24h-4z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/mct.mert/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 p-2 hover:border-white/30"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.5.6.2 1 .6 1.5 1.1s.9.9 1.1 1.5c.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.5 2.4-.2.6-.6 1-1.1 1.5s-.9.9-1.5 1.1c-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.5-.6-.2-1-.6-1.5-1.1s-.9-.9-1.1-1.5c-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.5-2.4.2-.6.6-1 1.1-1.5s.9-.9 1.5-1.1c.5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zM12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                aria-label="WhatsApp"
                href="https://wa.me/905458137963"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 p-2 hover:border-green-500"
              >
                <svg
                  viewBox="0 0 32 32"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.8 5.4 2.1 7.7L0 31.5l8.1-2.6C10.6 30.5 13.2 31.5 16 31.5 24.6 31.5 31.5 24.6 31.5 16S24.6.5 16 .5zm0 28.6c-2.4 0-4.8-.7-6.9-2l-.5-.3-4.8 1.5 1.6-4.6-.3-.5c-1.3-2-2-4.4-2-6.9 0-7.1 5.8-12.9 12.9-12.9S28.9 8.9 28.9 16 23.1 29.1 16 29.1zm7.1-9.6c-.4-.2-2.2-1.1-2.6-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.3-.5.3-.9.1s-1.8-.7-3.4-2.2c-1.2-1.1-2-2.5-2.3-2.9-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.8.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.1-.2-.9-2.1-1.3-2.9-.3-.7-.7-.6-1-.6H9.5c-.3 0-.8.1-1.2.5-.4.4-1.6 1.6-1.6 3.9s1.7 4.5 1.9 4.8c.2.3 3.4 5.2 8.4 7.1 1.2.5 2.2.8 2.9 1.1 1.2.4 2.3.3 3.1.2 1-.1 2.2-1 2.5-2s.3-1.8.2-2-.4-.3-.8-.5z" />
                </svg>
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
            <Link className="hover:text-white" href="/kullanim-sartlari">
              Kullanım Şartları
            </Link>
            <Link className="hover:text-white" href="/cerez-politikasi">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
