/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // www → apex redirect is configured in Vercel Domains (not here).
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
