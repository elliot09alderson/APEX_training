"use client";

import { useState } from "react";
import { site } from "@/lib/content";

type RazorpayHandlerResponse = {
  razorpay_payment_id: string;
  razorpay_subscription_id: string;
  razorpay_signature: string;
};

type RazorpayOptions = {
  key: string;
  subscription_id: string;
  name: string;
  description: string;
  theme: { color: string };
  handler: (response: RazorpayHandlerResponse) => void;
  modal: { ondismiss: () => void };
};

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayOptions) => { open: () => void };
  }
}

const CHECKOUT_SRC = "https://checkout.razorpay.com/v1/checkout.js";

function loadCheckout() {
  return new Promise<void>((resolve, reject) => {
    if (window.Razorpay) return resolve();
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CHECKOUT_SRC}"]`,
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("load failed")));
      return;
    }
    const script = document.createElement("script");
    script.src = CHECKOUT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("load failed"));
    document.body.appendChild(script);
  });
}

type Status = "idle" | "loading" | "done" | "error";

export function JoinButton({
  plan,
  planName,
  label,
  variant,
}: {
  plan: string;
  planName: string;
  label: string;
  variant: "primary" | "ghost";
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function startCheckout() {
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/razorpay/subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await response.json();

      // Until Razorpay keys are live, send the member to WhatsApp rather than
      // dead-ending them on an error.
      if (response.status === 503) {
        const text = `Hi Aadi, I want to join the ${planName} plan at APX Training.`;
        window.open(
          `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`,
          "_blank",
          "noopener,noreferrer",
        );
        setStatus("idle");
        return;
      }

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Try again.");
        return;
      }

      await loadCheckout();

      const checkout = new window.Razorpay!({
        key: data.keyId,
        subscription_id: data.subscriptionId,
        name: site.name,
        description: `${planName} membership`,
        theme: { color: "#ff4a17" },
        handler: async (payment) => {
          const verification = await fetch("/api/razorpay/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              paymentId: payment.razorpay_payment_id,
              subscriptionId: payment.razorpay_subscription_id,
              signature: payment.razorpay_signature,
            }),
          });

          if (verification.ok) {
            setStatus("done");
            setMessage("You are in. Check your email for the onboarding form.");
          } else {
            setStatus("error");
            setMessage(`Payment taken but not verified. Mail ${site.email}.`);
          }
        },
        modal: { ondismiss: () => setStatus("idle") },
      });

      checkout.open();
      setStatus("idle");
    } catch {
      setStatus("error");
      setMessage("Could not reach the payment page. Check your connection.");
    }
  }

  return (
    <div className="mt-9">
      <button
        type="button"
        onClick={startCheckout}
        disabled={status === "loading" || status === "done"}
        className={`w-full px-6 py-4 text-center text-sm font-bold tracking-wide uppercase transition-transform active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70 ${
          variant === "primary"
            ? "bg-ember text-ink"
            : "border-bone/25 text-bone hover:border-bone border"
        }`}
      >
        {status === "loading" ? "Opening checkout" : label}
      </button>

      {message ? (
        <p
          role="status"
          className={`mt-3 text-xs leading-relaxed ${
            status === "error" ? "text-ember" : "text-ash"
          }`}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}
