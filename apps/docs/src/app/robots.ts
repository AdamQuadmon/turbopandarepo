import type { MetadataRoute } from "next";

import { globalSeo } from "contentlayer/generated";

export default function robots(): MetadataRoute.Robots {
	const { url: baseUrl } = globalSeo;
	return {
		rules: {
			allow: "/",
			disallow: "/admin",
			userAgent: "*",
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
