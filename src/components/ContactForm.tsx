"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact } from "@/app/actions/contact";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="rounded-xl border px-5 py-3 disabled:opacity-60"
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
        className="rounded-xl border p-3"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="E-posta"
        className="rounded-xl border p-3"
        required
      />
      <input
        name="telefon"
        placeholder="Telefon"
        className="rounded-xl border p-3"
      />
      <textarea
        name="mesaj"
        placeholder="Mesajınız"
        className="min-h-32 rounded-xl border p-3"
        required
      />
      <SubmitButton />
      {result === "ok" && (
        <p className="text-sm text-green-500">Teşekkürler! En kısa sürede dönüş yapacağız.</p>
      )}
      {result === "err" && (
        <p className="text-sm text-red-500">Bir hata oluştu. Lütfen tekrar deneyin.</p>
      )}
    </form>
  );
}
