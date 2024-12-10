import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: false,
  basePath: "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
