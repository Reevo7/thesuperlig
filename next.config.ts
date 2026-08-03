import type { NextConfig } from "next";


const nextConfig: NextConfig = {

  devIndicators: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.steamstatic.com",
      },
    ],
  },

};


export default nextConfig;