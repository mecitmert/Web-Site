import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="mx-auto max-w-xl px-4 py-10 mt-16">
        <h1 className="text-3xl font-bold">İletişim</h1>
        <ContactForm />
      </section>
    </div>
  );
}
