"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#0B1020] text-white">
      {/* Arka plan blur & glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.12),transparent_60%)] blur-3xl" />
      </div>

      {/* İçerik */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-24 md:pt-32 pb-16">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            İletişim
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Bizimle İletişime Geçin
          </h1>
          <p className="mt-3 text-white/80">
            Performans odaklı web & growth çözümlerimiz hakkında bilgi alın.
          </p>
        </motion.div>

        {/* Bilgi Kartları */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          <InfoCard
            icon={Mail}
            title="E-posta"
            content="mecitmert003@gmail.com"
            href="mailto:mecitmert003@gmail.com"
          />
          <InfoCard
            icon={Phone}
            title="Telefon"
            content="+90 545 813 79 63"
            href="tel:+905458137963"
          />
          <InfoCard
            icon={MapPin}
            title="Adres"
            content="Akçeşme, Zafer Cd. NO:35, 03300 Bolvadin / Afyonkarahisar"
            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14cf17cb3ee0d6d9:0xd53572d7b43976e2?sa=X&ved=1t:8290&ictx=111"
          />
        </motion.div>

        {/* İletişim Formu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 mx-auto max-w-xl"
        >
          <h2 className="mb-4 text-2xl font-semibold text-center">
            Bize Mesaj Gönderin
          </h2>
          <ContactForm />
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-16 overflow-hidden rounded-2xl border border-white/10 shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.181706582963!2d31.059!3d38.712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cf17cb3ee0d6d9%3A0xd53572d7b43976e2!2sAk%C3%A7e%C5%9Fme%2C%20Zafer%20Cd.%20No%3A35%2C%2003300%20Bolvadin%2FAfyonkarahisar!5e0!3m2!1str!2str!4v1699980000000!5m2!1str!2str"
            width="100%"
            height="400"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex flex-col items-center text-center"
        >
          <h3 className="text-2xl font-semibold">Birlikte büyüyelim!</h3>
          <p className="mt-2 text-white/80 max-w-md">
            Web sitenizi veya markanızı büyütmek için ücretsiz bir keşif görüşmesi planlayın.
          </p>
          <Link
            href="mailto:mecitmert003@gmail.com"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/90 px-5 py-3 font-medium text-[#0B1020] shadow hover:bg-white"
          >
            E-posta Gönder <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

/* 🧱 Bilgi Kartı Bileşeni */
function InfoCard({
  icon: Icon,
  title,
  content,
  href,
}: {
  icon: any;
  title: string;
  content: string;
  href?: string;
}) {
  const inner = (
    <div className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/[.06] p-6 text-center transition-colors hover:bg-white/[.1] backdrop-blur">
      <div className="mb-3 inline-flex rounded-xl border border-white/10 bg-white/10 p-2">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-white/80">{content}</p>
    </div>
  );
  return href ? <Link href={href}>{inner}</Link> : inner;
}
