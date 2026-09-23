import { Check } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/reveal";
import { JoinButton } from "@/components/join-button";
import { joinCta, plans } from "@/lib/content";

export function Pricing() {
  return (
    <section
      id="membership"
      aria-labelledby="membership-heading"
      className="bg-ink-2 scroll-mt-24 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <Reveal>
          <p className="text-ember text-[11px] font-bold tracking-[0.28em] uppercase">
            Membership
          </p>
          <h2
            id="membership-heading"
            className="display text-bone mt-5 max-w-[18ch] text-[clamp(2.5rem,6vw,4.75rem)]"
          >
            Pick how close you want the coaching
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.06} className="h-full">
              <article
                className={`flex h-full flex-col border p-7 lg:p-8 ${
                  plan.featured
                    ? "border-ember bg-ink"
                    : "border-bone/10 bg-ink"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-bone text-sm font-bold tracking-[0.2em] uppercase">
                    {plan.name}
                  </h3>
                  {plan.featured ? (
                    <span className="bg-ember text-ink px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] uppercase">
                      Most picked
                    </span>
                  ) : null}
                </div>

                <p className="display text-bone mt-8 text-6xl">{plan.price}</p>
                <p className="text-ash mt-2 text-xs tracking-[0.18em] uppercase">
                  {plan.cadence}
                </p>
                <p className="text-ash mt-5 text-sm leading-relaxed">
                  {plan.summary}
                </p>

                <ul className="border-bone/10 mt-7 space-y-3 border-t pt-7">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-bone flex items-start gap-3 text-sm"
                    >
                      <Check
                        size={15}
                        weight="bold"
                        className="text-ember mt-1 shrink-0"
                      />
                      <span className="text-ash">{feature}</span>
                    </li>
                  ))}
                </ul>

                <JoinButton
                  plan={plan.key}
                  planName={plan.name}
                  label={joinCta.label}
                  variant={plan.featured ? "primary" : "ghost"}
                />
              </article>
            </Reveal>
          ))}
        </div>

        <p className="text-ash mt-8 text-sm">
          Billed monthly through Razorpay. Cancel before the next cycle and your
          current block stays with you.
        </p>
      </div>
    </section>
  );
}
