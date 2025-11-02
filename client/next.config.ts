import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This will allow your project to build even if it has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
