import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

// Instead of loading two fonts, just load one
const promptBold = fetch(
  new URL("./fonts/Prompt-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(request: NextRequest) {
  try {
    const promptBoldData = await promptBold;
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "Queforia";

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
              radial-gradient(circle at 25% 25%, rgba(35, 61, 255, 0.15), transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(35, 61, 255, 0.15), transparent 50%)
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
                "linear-gradient(to right, rgba(35, 61, 255, 0.15), transparent)",
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
                "linear-gradient(to right, rgba(35, 61, 255, 0.15), transparent)",
              borderRadius: "9999px",
              filter: "blur(50px)",
            }}
          />
          <div
            style={{
              fontSize: "120px",
              fontFamily: "Prompt Bold",
              color: "white",
              background:
                "linear-gradient(to bottom right, rgba(255,255,255,1), rgba(255,255,255,0.8))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Prompt Bold",
            data: promptBoldData,
            weight: 700,
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
