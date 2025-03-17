import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { BASE_URL } from "@/config/site";

export const runtime = "edge";

// Load fonts at the edge
const interBold = fetch(
  new URL("./fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const pacifico = fetch(
  new URL("./fonts/Pacifico-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(request: NextRequest) {
  try {
    const [interBoldData, pacificoData] = await Promise.all([
      interBold,
      pacifico,
    ]);

    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "Queforia";
    const mode = searchParams.get("mode") || "dark";
    const type = searchParams.get("type") || "default";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#030303",
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.15), transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.15), transparent 50%)
            `,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "-5%",
              width: "600px",
              height: "140px",
              transform: "rotate(12deg)",
              background:
                "linear-gradient(to right, rgba(99, 102, 241, 0.15), transparent)",
              borderRadius: "9999px",
              filter: "blur(50px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "20%",
              right: "-5%",
              width: "500px",
              height: "120px",
              transform: "rotate(-15deg)",
              background:
                "linear-gradient(to right, rgba(244, 63, 94, 0.15), transparent)",
              borderRadius: "9999px",
              filter: "blur(50px)",
            }}
          />

          {/* Main Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              zIndex: 10,
            }}
          >
            {/* Logo/Title */}
            <div
              style={{
                fontSize: "72px",
                fontFamily: "Prompt Bold",
                background:
                  "linear-gradient(to right, rgb(224, 242, 254), rgb(255, 255, 255), rgb(254, 242, 242))",
                backgroundClip: "text",
                color: "transparent",
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </div>

            {/* Tagline with Pacifico font */}
            <div
              style={{
                fontFamily: "Pacifico",
                fontSize: "48px",
                background:
                  "linear-gradient(to right, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.8))",
                backgroundClip: "text",
                color: "transparent",
                letterSpacing: "-0.01em",
              }}
            >
              Extra, Before Ordinary
            </div>
          </div>

          {/* Overlay gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(3, 3, 3, 0.8), transparent, rgba(3, 3, 3, 0.8))",
              zIndex: 5,
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter Bold",
            data: interBoldData,
            style: "normal",
            weight: 700,
          },
          {
            name: "Pacifico",
            data: pacificoData,
            style: "normal",
            weight: 400,
          },
        ],
      }
    );
  } catch (e: unknown) {
    const error = e instanceof Error ? e.message : "Unknown error occurred";
    console.log(error);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
