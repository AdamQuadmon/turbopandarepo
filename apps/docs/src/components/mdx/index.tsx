import type { MDXComponents } from "mdx/types";
import type { AnchorHTMLAttributes } from "react";

import Image, { type ImageProps } from "next/image";
import NextLink from "next/link";

// Define your custom MDX components.
export const mdxComponents: MDXComponents = {
	// Override the default <a> element to use the next/link component.
	a: ({ children, href }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		<NextLink href={href!}>{children}</NextLink>
	),
	// Add custom components
	Image: ({ alt, ...props }: ImageProps) => (
		<Image alt={alt} priority {...props} />
	),
};
