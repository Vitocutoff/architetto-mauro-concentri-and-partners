/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  // ⚠️ RIMOSSO in dev: crea problemi su mobile
  // allowedDevOrigins: ["localhost:3000", "192.168.1.171:3000"],

  images: {
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],

    deviceSizes: [360, 390, 414, 640, 768, 1024, 1280, 1440, 1680, 1920, 2560],
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },
};

export default nextConfig;
