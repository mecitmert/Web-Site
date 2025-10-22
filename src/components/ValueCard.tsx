"use client";
import { motion } from "framer-motion";

export default function ValueCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur"
    >
      <div className="relative z-10">
        <div className="mb-3 inline-flex rounded-xl border border-white/10 bg-white/10 p-2">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/80">{desc}</p>
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(59,130,246,.18), transparent 40%)",
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.currentScript.parentElement.addEventListener('mousemove', (e)=>{
            const r=e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty('--x', (e.clientX-r.left)+'px');
            e.currentTarget.style.setProperty('--y', (e.clientY-r.top)+'px');
          })
        `,
        }}
      />
    </motion.div>
  );
}
