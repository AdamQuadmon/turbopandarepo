import type { ResolvingMetadata } from "next";

import { notFound } from "next/navigation";

import { PostContent } from "~/components/post";
import { generatePostMetadata } from "~/utils/generate-metadata";
import { getPost, getSlugs } from "~/utils/posts";

export const generateStaticParams = () => getSlugs();

interface IMetadata {
	params: { slug: string };
}

export const generateMetadata = async (
	{ params }: IMetadata,
	parent: ResolvingMetadata,
) => {
	const post = getPost(params.slug);
	if (!post) {
		return;
	}

	return await generatePostMetadata(post, parent);
};

const PostLayout = ({ params }: IMetadata) => {
	const post = getPost(params.slug);

	if (!post) {
		notFound();
	}

	return <PostContent post={post} />;
};

export default PostLayout;
