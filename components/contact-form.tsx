"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { site } from "@/lib/content";

const plans = ["Not sure yet", "Community", "Coached", "One to one"];

type Errors = Partial<Record<"name" | "message", string>>;

const fieldClass =
  "bg-ink-2 border-bone/15 text-bone placeholder:text-ash/50 focus:border-ember w-full border px-4 py-3.5 text-sm outline-none transition-colors";
const labelClass = "text-bone text-xs font-bold tracking-[0.18em] uppercase";

export function ContactForm() {
  const reduce = useReducedMotion();
  const [errors, setErrors] = useState<Errors>({});
  const [sentTo, setSentTo] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(
      new FormData(event.currentTarget),
    ) as Record<string, string>;

    const nextErrors: Errors = {};
    if (data.name.trim().length < 2) nextErrors.name = "Tell us what to call you.";
    if (data.message.trim().length < 10)
      nextErrors.message = "A line or two about your training helps.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const text = [
      `Hi Aadi, I want to join APX Training.`,
      ``,
      `Name: ${data.name.trim()}`,
      `Plan: ${data.plan}`,
      data.age?.trim() ? `Age: ${data.age.trim()}` : "",
      ``,
      data.message.trim(),
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSentTo(url);
  }

  if (sentTo) {
    return (
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="border-ember bg-ink-2 border p-8"
        role="status"
      >
        <WhatsappLogo size={30} weight="fill" className="text-ember" />
        <p className="display text-bone mt-5 text-3xl">WhatsApp is open</p>
        <p className="text-ash mt-3 max-w-[46ch] text-sm leading-relaxed">
          Your message is typed out and waiting. Hit send in WhatsApp and Aadi
          picks it up from there, usually the same day.
        </p>
        <a
          href={sentTo}
          target="_blank"
          rel="noreferrer"
          className="text-ember mt-5 inline-block text-sm font-bold tracking-wide uppercase underline underline-offset-4"
        >
          Open it again
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6">
      <div className="grid items-start gap-6 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="text-ember text-xs">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <label htmlFor="age" className={labelClass}>
            Age
          </label>
          <input
            id="age"
            name="age"
            type="text"
            inputMode="numeric"
            className={fieldClass}
            aria-describedby="age-hint"
          />
          <p id="age-hint" className="text-ash text-xs">
            Optional.
          </p>
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="plan" className={labelClass}>
          Plan you are looking at
        </label>
        <select id="plan" name="plan" defaultValue={plans[0]} className={fieldClass}>
          {plans.map((plan) => (
            <option key={plan} value={plan} className="bg-ink">
              {plan}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className={labelClass}>
          Where you are now
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="How long you have trained, any injuries, and what you want to look like."
          className={`${fieldClass} resize-y`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-hint"}
        />
        {errors.message ? (
          <p id="message-error" className="text-ember text-xs">
            {errors.message}
          </p>
        ) : (
          <p id="message-hint" className="text-ash text-xs">
            This opens WhatsApp with your message ready to send.
          </p>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="bg-ember text-ink group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-wide uppercase transition-transform active:translate-y-px"
        >
          <WhatsappLogo size={18} weight="bold" />
          Send on WhatsApp
        </button>
      </div>
    </form>
  );
}
