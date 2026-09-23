import { createHmac, timingSafeEqual } from "node:crypto";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const { paymentId, subscriptionId, signature } = body ?? {};

  if (
    typeof paymentId !== "string" ||
    typeof subscriptionId !== "string" ||
    typeof signature !== "string"
  ) {
    return Response.json({ error: "Incomplete payment details." }, { status: 400 });
  }

  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keySecret) {
    return Response.json({ error: "Payments are not configured." }, { status: 503 });
  }

  // Razorpay signs subscription payments as HMAC(payment_id + "|" + subscription_id).
  const expected = createHmac("sha256", keySecret)
    .update(`${paymentId}|${subscriptionId}`)
    .digest("hex");

  const received = Buffer.from(signature, "utf8");
  const computed = Buffer.from(expected, "utf8");
  const valid =
    received.length === computed.length && timingSafeEqual(received, computed);

  if (!valid) {
    return Response.json({ error: "Payment could not be verified." }, { status: 400 });
  }

  return Response.json({ verified: true });
}
