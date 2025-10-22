import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    // Alias yapılandırması
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    config.resolve.alias["@components"] = path.resolve(__dirname, "src/components");
    config.resolve.alias["@app"] = path.resolve(__dirname, "src/app");
    config.resolve.alias["@lib"] = path.resolve(__dirname, "src/lib");
    config.resolve.alias["@styles"] = path.resolve(__dirname, "src/styles");
    return config;
  },
};

export default nextConfig;
