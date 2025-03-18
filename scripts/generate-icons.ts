import fs from "fs";
import path from "path";
import sharp from "sharp";
import { FaviconIcon } from "../components/brand/favicon-icon";

const ICONS_DIR = path.join(process.cwd(), "public", "icons");

async function generateIcons() {
  // Create icons directory if it doesn't exist
  if (!fs.existsSync(ICONS_DIR)) {
    fs.mkdirSync(ICONS_DIR, { recursive: true });
  }

  // Generate SVG favicon
  const faviconSvg = FaviconIcon({ size: 512 });
  const svgBuffer = Buffer.from(faviconSvg);

  // Generate PNG icons in different sizes
  const sizes = [192, 512];
  for (const size of sizes) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(ICONS_DIR, `icon-${size}.png`));

    // Generate maskable icons with padding
    await sharp(svgBuffer)
      .resize(size, size, {
        fit: "contain",
        background: { r: 35, g: 61, b: 255, alpha: 1 },
      })
      .png()
      .toFile(path.join(ICONS_DIR, `maskable-${size}.png`));
  }

  // Generate apple touch icon
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(ICONS_DIR, "apple-icon.png"));
}

generateIcons().catch(console.error);
