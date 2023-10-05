// plop-imports:
const withNextIntl = require("next-intl/plugin")();
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
	// experimental: { esmExternals: "loose" },
	reactStrictMode: true,
	// production?
	swcMinify: true,
	transpilePackages: ["@turbopandarepo/ui", "@turbopandarepo/preset"],
};

module.exports = withContentlayer(withNextIntl(nextConfig));
