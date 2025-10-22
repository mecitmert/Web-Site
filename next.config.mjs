/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Turbopack uyumlu alias yapılandırması
  experimental: {
    turbo: {
      resolveAlias: {
        "@": "./src",
        "@components": "./src/components",
        "@app": "./src/app",
        "@lib": "./src/lib",
        "@styles": "./src/styles",
      },
    },
  },
};

export default nextConfig;
