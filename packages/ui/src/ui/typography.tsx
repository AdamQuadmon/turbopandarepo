import type { PropsWithChildren } from "react";

import { styled } from "@turbopandarepo/ds/jsx";
import { type HTMLStyledProps } from "@turbopandarepo/ds/jsx";

import { slugify } from "../lib/slugify";

type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TagVariants = "p" | "span" | HeadingTags;

export type TypographyProps = PropsWithChildren<{
	as?: TagVariants;
}> &
	HTMLStyledProps<TagVariants>;

export type HeadingProps = PropsWithChildren<{
	as?: HeadingTags;
}> &
	HTMLStyledProps<TagVariants>;

export const Typography = (props: TypographyProps) => {
	const { as = "p", ...rest } = props;

	const Component = styled(as);
	return <Component {...rest} />;
};

export const Heading = (props: HeadingProps) => {
	const { as = "h2", children, ...rest } = props;
	const id = typeof children === "string" ? slugify(children) : undefined;

	return (
		<Typography as={as} fontWeight="semibold" id={id} {...rest}>
			{children}
		</Typography>
	);
};
