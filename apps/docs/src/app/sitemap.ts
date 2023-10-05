import { allPosts, globalSeo } from "contentlayer/generated";

export default function sitemap() {
	const { sitemapPaths, url: baseUrl } = globalSeo;
	const posts = allPosts.map((post) => ({
		lastModified: post.seo.publishedAt,
		url: `${baseUrl}/posts/${post.slug}`,
	}));

	const routes = ["", ...sitemapPaths].map((route) => ({
		lastModified: new Date().toISOString().split("T")[0],
		url: `${baseUrl}${route}`,
	}));

	return [...routes, ...posts];
}
