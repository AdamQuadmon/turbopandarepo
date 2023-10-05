import type { Post } from "contentlayer/generated";

import { format, parseISO } from "date-fns";
import Image from "next/image";
import NextLink from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

import { mdxComponents } from "~/components/mdx";

interface IPost {
	post: Post;
}

export const PostCard = ({ post }: IPost) => {
	return (
		<div>
			<PostCover post={post} size={200} />
			<h2>
				<NextLink href={post.url}>{post.title}</NextLink>
			</h2>
			<h3>{post._raw.flattenedPath}</h3>
			<PostDate post={post} />
		</div>
	);
};

export const PostContent = ({ post }: IPost) => {
	const MDXContent = useMDXComponent(post.body.code);
	return (
		<article>
			<PostCover post={post} />
			<div>
				<PostDate post={post} />
				<h1>{post.title}</h1>
			</div>
			<MDXContent components={mdxComponents} />
		</article>
	);
};

export const PostDate = ({ post }: IPost) => {
	return (
		<time dateTime={post.seo.publishedAt}>
			{format(parseISO(post.seo.publishedAt), "LLLL d, yyyy")}
		</time>
	);
};

interface IPostCover extends IPost {
	size?: number;
}

export const PostCover = ({ post, size = 500 }: IPostCover) => {
	if (!post.cover) {
		return;
	}

	return (
		<Image
			// TODO provide coverAlt
			alt={post.title}
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			blurDataURL={post.cover.blurhashDataUrl}
			height={size / post.cover.aspectRatio}
			priority
			src={post.cover.filePath.replace("../public", "")}
			width={size / post.cover.aspectRatio}
		/>
	);
};
