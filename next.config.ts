import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Disable turbopack to avoid WASM binding issues
    turbo: {
      root: process.cwd(),
    },
  },
};

export default nextConfig;
