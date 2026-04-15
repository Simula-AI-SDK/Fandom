/** @type {import('next').NextConfig} */
const vercelUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";
const devFallback =
  process.env.NODE_ENV === "development" && !process.env.NEXT_PUBLIC_SITE_URL && !vercelUrl
    ? "http://localhost:3000"
    : "";

const nextConfig = {
  env: {
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL || vercelUrl || devFallback || "",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;