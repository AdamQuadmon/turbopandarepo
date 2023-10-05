// plop-imports:
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
	// experimental: { esmExternals: "loose" },
	reactStrictMode: true,
	// production?
	transpilePackages: ["@turbopandarepo/ui", "@turbopandarepo/preset"],
};

module.exports = withContentlayer(nextConfig);
