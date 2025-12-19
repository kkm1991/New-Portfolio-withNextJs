import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export", // ← this enables static export
  images: {
    unoptimized: true, // <-- disables server-side image optimization
  },
};

export default nextConfig;
