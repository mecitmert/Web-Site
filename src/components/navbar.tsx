"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

interface PillNavProps {
  logo: string;
  items: NavItem[];
}

const PillNav = ({ logo, items }: PillNavProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="absolute top-4 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-4">
        {/* Logo (sadece görsel, arka plan yok) */}
        <Link href="/">
          <img src={logo} alt="Logo" className="h-20 w-20 object-cover transition-transform duration-500 hover:rotate-180" />
        </Link>

        {/* Desktop kapsayıcı: ince siyah arka plan */}
        <div className="relative hidden items-center rounded-full bg-black px-2 py-1 md:flex">
          <ul className="relative flex gap-2">
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={`group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full px-4 font-medium uppercase tracking-wide text-xs transition-colors ${
                      isActive ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    {/* Hover arka plan (yazının ALTINDA) */}
                    <span
                      className={`absolute inset-0 z-0 scale-0 rounded-full bg-black transition-transform duration-300 group-hover:scale-100 ${
                        isActive ? "scale-100" : ""
                      }`}
                      aria-hidden="true"
                    />
                    {/* Metin (her zaman üstte) */}
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      {item.label}
                    </span>
                  </Link>

                  {/* Aktif alt nokta – pilden pile akıcı hareket */}
                  {isActive && (
                    <motion.span
                      layoutId="active-pill-dot"
                      className="absolute -bottom-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-black"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Button */}
        <button
          className="flex h-12 w-12 flex-col items-center justify-center gap-1 rounded-full bg-black md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menüyü aç/kapat"
        >
          <span className="h-0.5 w-5 rounded bg-white" />
          <span className="h-0.5 w-5 rounded bg-white" />
        </button>
      </nav>

      {/* Mobile Menu (yumuşak aç/kapa) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-4 mt-3 rounded-2xl bg-black p-2 shadow-lg"
          >
            <ul className="flex flex-col gap-2">
              {items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-full px-4 py-2 font-medium uppercase tracking-wide text-xs transition-colors ${
                        isActive
                          ? "bg-white text-black"
                          : "bg-black text-white hover:bg-gray-800"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PillNav;
