interface LogoSVGProps {
  color?: string;
  backgroundColor?: string;
  width?: number;
  height?: number;
  variant?: "full" | "mark";
}

export function LogoSVG({
  color = "#ffffff",
  backgroundColor = "transparent",
  width = 200,
  height = 60,
  variant = "full",
}: LogoSVGProps) {
  return `
    <svg width="${width}" height="${height}" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <style>
                text {
                    font-family: var(--font-prompt), 'Arial Black', 'Helvetica Bold', sans-serif;
                    font-weight: 700;
                }
            </style>
        </defs>
        <rect width="100%" height="100%" fill="${backgroundColor}"/>
        <text
            x="50%"
            y="50%"
            font-weight="700"
            font-size="32"
            fill="${color}"
            text-anchor="middle"
            dominant-baseline="middle"
        >
            ${variant === "full" ? "Queforia" : "Q"}
        </text>
    </svg>
`.trim();
}

export const LogomarkSVG = (props: LogoSVGProps) =>
  LogoSVG({ ...props, variant: "mark" });
export const FaviconSVG = LogomarkSVG;
