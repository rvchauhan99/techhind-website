import sharp from "sharp";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
const logoSourceDir = join(publicDir, "techhindlogoV23_new");
const logoSvg = readFileSync(join(logoSourceDir, "techhindlogoV23_new.svg"));

// Promote pixel-perfect brand PNGs from V23 archive (do not regenerate from SVG)
const promotedAssets = [
  {
    from: join(logoSourceDir, "techhindlogoV23_new (1).png"),
    to: join(publicDir, "logo.png"),
  },
  {
    from: join(logoSourceDir, "techhindlogoV23_new.png"),
    to: join(publicDir, "logo-transparent.png"),
  },
  {
    from: join(logoSourceDir, "techhindlogoV23_new.svg"),
    to: join(publicDir, "logo.svg"),
  },
];

for (const { from, to } of promotedAssets) {
  await sharp(from).toFile(to);
}

// App icon 512x512
await sharp(logoSvg)
  .resize(400, 76, { fit: "contain", background: { r: 11, g: 28, b: 51, alpha: 1 } })
  .extend({
    top: 218,
    bottom: 218,
    left: 56,
    right: 56,
    background: { r: 11, g: 28, b: 51, alpha: 1 },
  })
  .png()
  .toFile(join(publicDir, "icon.png"));

// Favicon 32x32
await sharp(logoSvg)
  .resize(28, 5, { fit: "contain", background: { r: 11, g: 28, b: 51, alpha: 1 } })
  .extend({
    top: 14,
    bottom: 13,
    left: 2,
    right: 2,
    background: { r: 11, g: 28, b: 51, alpha: 1 },
  })
  .resize(32, 32)
  .png()
  .toFile(join(publicDir, "favicon.ico"));

// OG image 1200x630 with composited V23 logo
const ogBackground = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0b1c33"/>
      <stop offset="100%" style="stop-color:#1b365d"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1000" cy="120" r="200" fill="#00823b" opacity="0.15"/>
  <circle cx="150" cy="500" r="250" fill="#00823b" opacity="0.1"/>
</svg>`);

const logoForOg = await sharp(logoSvg)
  .resize(520, 96, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

const taglineSvg = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <text x="80" y="280" font-family="Arial, sans-serif" font-size="32" fill="#4ade80">Complete Solar Management System for India</text>
  <text x="80" y="340" font-family="Arial, sans-serif" font-size="24" fill="#94a3b8">Lead management · Project tracking · GST quotations</text>
  <text x="80" y="400" font-family="Arial, sans-serif" font-size="22" fill="#94a3b8">From lead to commissioning — residential, commercial &amp; ground-mounted</text>
  <rect x="80" y="460" width="220" height="50" rx="8" fill="#00823b"/>
  <text x="110" y="493" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#ffffff">techhind.in</text>
</svg>`);

await sharp(ogBackground)
  .composite([
    { input: logoForOg, top: 100, left: 80 },
    { input: taglineSvg, top: 0, left: 0 },
  ])
  .png()
  .toFile(join(publicDir, "og-image.png"));

console.log("SEO assets generated successfully from techhindlogoV23_new.");
