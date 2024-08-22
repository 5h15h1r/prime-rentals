/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["vaave.s3.amazonaws.com"],
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
  },
};

export default nextConfig;
    