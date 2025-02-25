/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {},

  publicRuntimeConfig: {
    hostName: process.env.NEXT_PUBLIC_AUTH_URL,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
