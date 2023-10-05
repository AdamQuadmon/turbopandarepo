import { type Post, allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export const getSlugs = () =>
	allPosts.map((post) => ({
		slug: post._raw.flattenedPath,
	}));

export const getPost = (slug: string) =>
	allPosts.find((post) => post._raw.flattenedPath === `posts/${slug}`);

export const getSortedPosts = () => {
	return allPosts.sort((a: Post, b: Post) =>
		compareDesc(new Date(a.seo.publishedAt), new Date(b.seo.publishedAt)),
	);
};
