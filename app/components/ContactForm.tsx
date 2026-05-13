"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Enquiry from ${form.name}${form.company ? ` — ${form.company}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:contact@hollingerai.online?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass =
    "w-full border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-zinc-600";

  if (sent) {
    return (
      <div className="flex min-h-[320px] flex-col items-start justify-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-500">
          Message Received
        </p>
        <p className="text-2xl font-semibold tracking-tight text-white">
          We'll be in touch within one business day.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm text-zinc-500 transition-colors hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Name
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-zinc-500">
            Company
          </label>
          <input
            name="company"
            type="text"
            placeholder="Your company"
            value={form.company}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-zinc-500">
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          placeholder="you@yourcompany.com"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-zinc-500">
          What are you trying to fix?
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Describe the process or workflow you want to improve..."
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-sm bg-blue-600 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-blue-500 sm:w-auto sm:px-10"
      >
        Send Message
      </button>
    </form>
  );
}
