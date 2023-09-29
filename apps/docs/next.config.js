/** @type {import('next').NextConfig} */
const nextConfig = {
	// experimental: { esmExternals: "loose" },
	reactStrictMode: true,
	// production?
	// swcMinify: true,
	transpilePackages: ["@turbopandarepo/ui", "@turbopandarepo/preset"],
};

module.exports = nextConfig;
