import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
const logoSourceDir = join(publicDir, "techhindlogoV23_new");

async function loadSharp() {
  const require = createRequire(import.meta.url);
  const candidates = [
    join(__dirname, "../../techhind-solar-web/node_modules/sharp"),
    join(__dirname, "../../techhind-solar-api/node_modules/sharp"),
  ];
  try {
    return (await import("sharp")).default;
  } catch {
    for (const p of candidates) {
      if (existsSync(p)) {
        return require(p);
      }
    }
    throw new Error(
      "sharp not found. Install sharp or run from a sibling app that has it.",
    );
  }
}

const sharp = await loadSharp();

const logoSvgPath = join(logoSourceDir, "techhindlogoV23_new.svg");
const logoPngPath = join(logoSourceDir, "techhindlogoV23_new.png");
const logoPngAltPath = join(logoSourceDir, "techhindlogoV23_new (1).png");
const dashboardPath = join(publicDir, "platform", "dashboard-home.png");

const logoSvg = existsSync(logoSvgPath) ? readFileSync(logoSvgPath) : null;

// Promote pixel-perfect brand PNGs from V23 archive
const promotedAssets = [
  { from: logoPngAltPath, to: join(publicDir, "logo.png") },
  { from: logoPngPath, to: join(publicDir, "logo-transparent.png") },
  { from: logoSvgPath, to: join(publicDir, "logo.svg") },
].filter((a) => existsSync(a.from));

for (const { from, to } of promotedAssets) {
  await sharp(from).toFile(to);
}

if (logoSvg) {
  await sharp(logoSvg)
    .resize(400, 76, {
      fit: "contain",
      background: { r: 11, g: 28, b: 51, alpha: 1 },
    })
    .extend({
      top: 218,
      bottom: 218,
      left: 56,
      right: 56,
      background: { r: 11, g: 28, b: 51, alpha: 1 },
    })
    .png()
    .toFile(join(publicDir, "icon.png"));

  await sharp(logoSvg)
    .resize(28, 5, {
      fit: "contain",
      background: { r: 11, g: 28, b: 51, alpha: 1 },
    })
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
}

// ---------------------------------------------------------------------------
// OG image 1200×630 — product-first, WhatsApp / LinkedIn ready
// ---------------------------------------------------------------------------

const W = 1200;
const H = 630;

const ogBackground = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#071526"/>
      <stop offset="45%" stop-color="#0b1c33"/>
      <stop offset="100%" stop-color="#1b365d"/>
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00823b" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#00823b" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="orb1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#00823b" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#00823b" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="orb2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2d4e7a" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#2d4e7a" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <circle cx="980" cy="80" r="280" fill="url(#orb1)"/>
  <circle cx="1100" cy="520" r="240" fill="url(#orb2)"/>
  <circle cx="80" cy="560" r="200" fill="url(#orb1)"/>
  <rect x="0" y="0" width="8" height="${H}" fill="#00823b"/>
  <rect x="0" y="0" width="520" height="${H}" fill="url(#glow)" opacity="0.25"/>
</svg>`);

const markSource = existsSync(logoPngPath)
  ? logoPngPath
  : logoSvg || join(publicDir, "logo-transparent.png");

const logoMeta = await sharp(markSource).metadata();
const fullW = logoMeta.width || 800;
const fullH = logoMeta.height || 150;
// Icon is ~left 22% of the wide logo wordmark
const markExtractW = Math.max(1, Math.round(fullW * 0.22));

const logoMark = await sharp(markSource)
  .extract({ left: 0, top: 0, width: markExtractW, height: fullH })
  .resize(72, 72, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toBuffer();

const leftCopy = Buffer.from(`
<svg width="560" height="630" xmlns="http://www.w3.org/2000/svg">
  <text x="164" y="118" font-family="system-ui, -apple-system, Segoe UI, Arial, sans-serif"
        font-size="36" font-weight="700" fill="#ffffff" letter-spacing="0.5">techHind</text>
  <text x="164" y="148" font-family="system-ui, -apple-system, Segoe UI, Arial, sans-serif"
        font-size="13" fill="#94a3b8">Software Tailored To Your Workflow</text>

  <rect x="80" y="178" width="268" height="34" rx="17" fill="#00823b" fill-opacity="0.18"
        stroke="#00823b" stroke-opacity="0.55"/>
  <circle cx="100" cy="195" r="5" fill="#4ade80"/>
  <text x="114" y="200" font-family="system-ui, -apple-system, Segoe UI, Arial, sans-serif"
        font-size="13" font-weight="600" fill="#86efac">Live with 4 Solar EPCs since March</text>

  <text x="80" y="270" font-family="system-ui, -apple-system, Segoe UI, Arial, sans-serif"
        font-size="42" font-weight="800" fill="#ffffff">India&#x2019;s Solar CRM</text>
  <text x="80" y="322" font-family="system-ui, -apple-system, Segoe UI, Arial, sans-serif"
        font-size="42" font-weight="800" fill="#4ade80">for EPC Companies</text>

  <text x="80" y="380" font-family="system-ui, -apple-system, Segoe UI, Arial, sans-serif"
        font-size="18" fill="#cbd5e1">Lead → Project → Payment in one platform</text>
  <text x="80" y="412" font-family="system-ui, -apple-system, Segoe UI, Arial, sans-serif"
        font-size="16" fill="#94a3b8">Inventory · B2B Trading · Service · Analytics</text>

  <rect x="80" y="460" width="210" height="48" rx="10" fill="#00823b"/>
  <text x="112" y="491" font-family="system-ui, -apple-system, Segoe UI, Arial, sans-serif"
        font-size="20" font-weight="700" fill="#ffffff">techhind.in</text>

  <text x="80" y="550" font-family="system-ui, -apple-system, Segoe UI, Arial, sans-serif"
        font-size="14" fill="#64748b">14-day free trial · No payment required</text>
</svg>`);

const shotFrameW = 620;
const shotFrameH = 420;
const shotInnerPad = 10;

const dashboardCrop = await sharp(dashboardPath)
  .extract({ left: 0, top: 0, width: 1920, height: 900 })
  .resize(shotFrameW - shotInnerPad * 2, shotFrameH - 36 - shotInnerPad, {
    fit: "cover",
    position: "north",
  })
  .png()
  .toBuffer();

const browserChrome = Buffer.from(`
<svg width="${shotFrameW}" height="${shotFrameH}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-25%" y="-25%" width="150%" height="150%">
      <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#000000" flood-opacity="0.45"/>
    </filter>
    <linearGradient id="chrome" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
  <rect x="4" y="4" width="${shotFrameW - 8}" height="${shotFrameH - 8}" rx="16"
        fill="url(#chrome)" filter="url(#shadow)"
        stroke="#475569" stroke-width="1.5"/>
  <circle cx="28" cy="22" r="5" fill="#ef4444"/>
  <circle cx="46" cy="22" r="5" fill="#eab308"/>
  <circle cx="64" cy="22" r="5" fill="#22c55e"/>
  <rect x="86" y="14" width="300" height="16" rx="8" fill="#0b1220"/>
  <text x="100" y="26" font-family="system-ui, Arial, sans-serif" font-size="10" fill="#64748b">app.techhind.in — Operations Dashboard</text>
</svg>`);

const productCard = await sharp(browserChrome)
  .composite([
    {
      input: dashboardCrop,
      top: 36,
      left: shotInnerPad + 4,
    },
  ])
  .png()
  .toBuffer();

await sharp(ogBackground)
  .composite([
    { input: logoMark, top: 78, left: 80 },
    { input: leftCopy, top: 0, left: 0 },
    { input: productCard, top: 100, left: 540 },
  ])
  .png()
  .toFile(join(publicDir, "og-image.png"));

console.log("SEO assets generated successfully.");
console.log("  → public/og-image.png (1200×630, product + social proof)");
