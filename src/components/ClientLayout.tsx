"use client";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {isHome ? (
        <main className="w-full p-0">{children}</main>
      ) : (
        <main className="mx-auto max-w-6xl p-4">{children}</main>
      )}
    </>
  );
}
