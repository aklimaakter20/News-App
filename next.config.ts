import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.dummyjson.com'], // dummyjson image গুলো এই domain থেকে আসে
  },
};

export default nextConfig;