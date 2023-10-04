import { notFound } from "next/navigation";

export default function CatchAllPage() {
	// `not-found` currently only renders when triggered by the `notFound` function
	// https://beta.nextjs.org/docs/api-reference/file-conventions/not-found
	notFound();
}
