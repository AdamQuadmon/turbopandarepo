import type { ResolvingMetadata } from "next";

import { type Post, globalSeo } from "contentlayer/generated";

export const generateSiteMetadata = () => {
	const { description, icon, ogImageApi, title, titleTemplate, url } =
		globalSeo;

	const openGraph = {
		description,
		images: [ogImageApi],
		title,
		type: "website",
		url,
	};

	const twitter = {
		card: "summary_large_image",
		description,
		images: [ogImageApi],
		title,
	};
	return {
		description,
		icons: {
			icon,
		},
		metadataBase: new URL(url),
		openGraph,
		title: {
			default: title,
			template: titleTemplate,
		},
		twitter,
	};
};

export const generatePostsMetadata = () => {
	// TODO: add posts schema
	return {};
};

export const generatePostMetadata = async (
	post: Post,
	parent: ResolvingMetadata,
) => {
	const { ogImageApi, url: baseUrl } = globalSeo;
	const { seo, title, url } = post;
	const {
		description,
		ogImage: seoOgImage,
		publishedAt,
		title: seoTitle,
	} = seo;

	const ogImage = seoOgImage ? seoOgImage : `${ogImageApi}?title${title}`;
	const previousImages = (await parent).openGraph?.images ?? [];
	const images = [ogImage, ...previousImages];
	const openGraph = {
		description,
		images,
		publishedTime: publishedAt,
		title,
		type: "article",
		url,
	};

	const twitter = {
		card: "summary_large_image",
		description,
		images,
		title,
	};

	return {
		description,
		metadataBase: new URL(baseUrl),
		openGraph,
		// if a Seo Title is provided it will ignore the title.template
		title: seoTitle ? { absolute: seoTitle } : title,
		twitter,
	};
};
