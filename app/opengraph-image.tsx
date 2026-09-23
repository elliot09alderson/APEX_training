import { ImageResponse } from "next/og";

export const alt = "APX Training. Fighter-built physique coaching.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 18, height: 18, background: "#ff4a17" }} />
          <span
            style={{
              color: "#9d9da4",
              fontSize: 26,
              letterSpacing: 8,
              textTransform: "uppercase",
            }}
          >
            APX Training
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#f2f0eb",
              fontSize: 104,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: -3,
              textTransform: "uppercase",
            }}
          >
            Built by a fighter.
          </span>
          <span
            style={{
              color: "#ff4a17",
              fontSize: 104,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -3,
              textTransform: "uppercase",
            }}
          >
            Not a template.
          </span>
        </div>

        <span style={{ color: "#9d9da4", fontSize: 28 }}>
          Coaching by Aditya Janghel. International kickboxing and wushu athlete, 40+
          golds.
        </span>
      </div>
    ),
    size,
  );
}
