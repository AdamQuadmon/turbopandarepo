import { PostCard } from "~/components/post";
import { generatePostsMetadata } from "~/utils/generate-metadata";
import { getSortedPosts } from "~/utils/posts";

export const generateMetadata = () => generatePostsMetadata();

export default function Page() {
	const posts = getSortedPosts();

	return (
		<div>
			<h1>Blog</h1>
			{posts.map((post, idx) => (
				<PostCard key={idx} post={post} />
			))}
		</div>
	);
}
