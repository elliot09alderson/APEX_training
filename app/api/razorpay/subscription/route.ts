import Razorpay from "razorpay";

const planIds: Record<string, string | undefined> = {
  community: process.env.RAZORPAY_PLAN_COMMUNITY,
  coached: process.env.RAZORPAY_PLAN_COACHED,
  "one-to-one": process.env.RAZORPAY_PLAN_ONE_TO_ONE,
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const plan = body?.plan;

  if (typeof plan !== "string" || !(plan in planIds)) {
    return Response.json({ error: "Unknown plan." }, { status: 400 });
  }

  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  const planId = planIds[plan];

  if (!keyId || !keySecret || !planId) {
    return Response.json(
      { error: "Payments are not switched on yet. Message us and we will set you up." },
      { status: 503 },
    );
  }

  const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });

  // 12 billing cycles, so a member is never locked in beyond a year without renewing.
  const subscription = await razorpay.subscriptions.create({
    plan_id: planId,
    total_count: 12,
    customer_notify: 1,
  });

  return Response.json({ subscriptionId: subscription.id, keyId });
}
