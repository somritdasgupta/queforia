import fs from "fs";
import path from "path";
import sharp from "sharp";
import toIco from "to-ico";
import { FaviconIcon } from "../components/brand/favicon-icon";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const ICONS_DIR = path.join(PUBLIC_DIR, "icons");

async function generateIcons() {
  // Create directories if they don't exist
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }
  if (!fs.existsSync(ICONS_DIR)) {
    fs.mkdirSync(ICONS_DIR, { recursive: true });
  }
  const cleanup = async () => {
    const files = await fs.promises.readdir(ICONS_DIR);
    await Promise.all(
      files.map((file) =>
        fs.promises.unlink(path.join(ICONS_DIR, file)).catch(() => {})
      )
    );
    try {
      await fs.promises.unlink(path.join(PUBLIC_DIR, "favicon.ico"));
    } catch {}
  };

  try {
    await cleanup();

    // Generate SVG favicon
    const faviconSvg = FaviconIcon({ size: 512 });
    const svgBuffer = Buffer.from(faviconSvg);

    // Generate PNG icons in different sizes
    const sizes = [16, 32, 48, 64, 96, 128, 180, 192, 256, 512];
    for (const size of sizes) {
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(path.join(ICONS_DIR, `icon-${size}.png`));
      if (size >= 192) {
        await sharp(svgBuffer)
          .resize(size, size, {
            fit: "contain",
            background: { r: 35, g: 61, b: 255, alpha: 1 },
          })
          .png()
          .toFile(path.join(ICONS_DIR, `maskable-${size}.png`));
      }
    }

    // Generate favicon.ico with multiple sizes
    const faviconSizes = [16, 32, 48];
    const faviconBuffers = await Promise.all(
      faviconSizes.map((size) =>
        sharp(svgBuffer).resize(size, size).png().toBuffer()
      )
    );

    // Generate favicon.ico using to-ico
    const icoBuffer = await toIco(faviconBuffers);
    await fs.promises.writeFile(
      path.join(PUBLIC_DIR, "favicon.ico"),
      icoBuffer
    );

    // Generate apple touch icon
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(ICONS_DIR, "apple-icon.png"));

    console.log("✓ All icons generated successfully");
  } catch (error) {
    console.error("Error generating icons:", error);
    process.exit(1);
  }
}

generateIcons().catch(console.error);
