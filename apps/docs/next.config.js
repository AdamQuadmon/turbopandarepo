/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: { esmExternals: "loose" },
  transpilePackages: ["@turbopandarepo/ui", "@turbopandarepo/preset"],
};
// eslint-disable-next-line no-undef
module.exports = nextConfig;
