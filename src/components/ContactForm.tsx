"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact } from "@/app/actions/contact";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="rounded-xl border px-5 py-3 disabled:opacity-60 bg-white text-black hover:bg-gray-100 transition-colors"
    >
      {pending ? "Gönderiliyor..." : "Gönder"}
    </button>
  );
}

export default function ContactForm() {
  const [result, setResult] = useState<null | "ok" | "err">(null);

  async function action(formData: FormData) {
    try {
      const res = await submitContact(formData);
      setResult(res?.ok ? "ok" : "err");
    } catch {
      setResult("err");
    }
  }

  return (
    <form action={action} className="mt-6 grid gap-4" method="post">
      <input
        name="ad"
        placeholder="Ad Soyad"
        className="rounded-xl border p-3 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="E-posta"
        className="rounded-xl border p-3 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        name="telefon"
        placeholder="Telefon"
        className="rounded-xl border p-3 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        name="mesaj"
        placeholder="Mesajınız"
        className="min-h-32 rounded-xl border p-3 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <SubmitButton />
      {result === "ok" && (
        <p className="text-sm text-green-400">Teşekkürler! En kısa sürede dönüş yapacağız.</p>
      )}
      {result === "err" && (
        <p className="text-sm text-red-400">Bir hata oluştu. Lütfen tekrar deneyin.</p>
      )}
    </form>
  );
}
