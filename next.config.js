const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: isProd ? "/gh-pages" : "",
  assetPrefix: isProd ? "." : "",
};

module.exports = nextConfig;
