"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Projeler / Referanslar", href: "/referanslar" },
   { label: "Kullandığımız Teknlojiler", href: "/teknolojiler" },
  { label: "Bilgi Köşesi", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
 
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-6 left-1/2 z-50 w-[90%] -translate-x-1/2">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-500 hover:shadow-[0_8px_40px_rgba(255,191,0,0.25)]">
        <div className="flex items-center justify-between px-8 py-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.svg"
              alt="MMB Yazılım"
              width={52}
              height={52}
              className="rounded-full transition-transform duration-500 group-hover:rotate-180"
            />
            <span className="text-white text-xl font-bold tracking-wide group-hover:text-amber-400 transition-colors duration-300">
              MMB Yazılım
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 rounded-xl font-semibold transition-colors duration-300 ${
                      isActive
                        ? "text-amber-400"
                        : "text-gray-200 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-xl bg-amber-400/20"
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-400 transition-all duration-300"
            aria-label="Menüyü Aç/Kapat"
          >
            <span className="h-0.5 w-5 bg-white rounded mb-1" />
            <span className="h-0.5 w-5 bg-white rounded" />
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center gap-3 py-4 border-t border-white/10 md:hidden"
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-2 w-3/4 text-center rounded-xl font-medium transition-all ${
                      isActive
                        ? "bg-amber-500 text-black"
                        : "bg-white/10 text-white hover:bg-amber-500 hover:text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
