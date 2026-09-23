import { coach, faqs, plans, site } from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> ${site.name} is an online physique coaching membership and training community led by ${coach.name}, an international kickboxing and wushu athlete with 40+ national and state gold medals and a former Sports Authority of India Elite athlete. Members get a structured four week training block, weekly video form review, nutrition targets built around Indian home food, and three live coaching sessions a week.

## What members get

- A four week training block rewritten every month, with video demos for every lift
- Weekly form review on video, so technique is corrected before it causes injury
- Nutrition targets built around roti, rice, dal, eggs and paneer rather than a Western meal-prep template
- Live coaching sessions every Tuesday, Thursday and Saturday
- Combat-sport conditioning adapted for physique goals, not fight preparation

## Coach

${coach.name} (called Aadi) competes in kickboxing and wushu at international level and has won 40+ gold medals across national and state championships. He trained as a Sports Authority of India Elite athlete before founding ${site.name} with Pratik Verma.

## Membership plans

${plans
  .map(
    (plan) =>
      `- ${plan.name}: ${plan.price} per month. ${plan.summary} Includes: ${plan.features.join(", ")}.`,
  )
  .join("\n")}

Billing is monthly through Razorpay and can be cancelled before the next cycle.

## Common questions

${faqs.map((item) => `- ${item.q} ${item.a}`).join("\n")}

## Key pages

- [Home](${site.url}/): membership overview, coach record, training method and pricing
- [Gallery](${site.url}/gallery): training, competition and community photos
- [Contact](${site.url}/contact): enquiry form that opens WhatsApp
- [Pricing, machine readable](${site.url}/pricing.md): plan data for agents

## Contact

- Instagram: ${site.instagramHandle} (${site.instagram})
- Email: ${site.email}
- Serving: India, coaching delivered online
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
