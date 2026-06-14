import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      // Workshop instructor avatars + thumbnails
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // Turbopack configuration to silence custom webpack warning
  turbopack: {},
};

export default nextConfig;
