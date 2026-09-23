import { plans, site } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const body = `# Pricing, ${site.name}

All plans are monthly subscriptions in Indian rupees, billed through Razorpay.
Cancel before the next cycle and the current training block stays with the member.

${plans
  .map(
    (plan) => `## ${plan.name}

- Price: ${plan.price} per month (INR)
- Best for: ${plan.summary}
- Includes:
${plan.features.map((feature) => `  - ${feature}`).join("\n")}
`,
  )
  .join("\n")}
## Notes

- Live group coaching runs every Tuesday, Thursday and Saturday on every plan.
- Coaching is delivered online and is available anywhere in India.
- Sign up at ${site.url}/#membership or ask a question at ${site.url}/contact
`;

  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
