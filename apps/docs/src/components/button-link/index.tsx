"use client";

import { Button, type ButtonProps } from "@turbopandarepo/ui";
import NextLink, { type LinkProps } from "next/link";
export type ButtonLinkProps = LinkProps & ButtonProps;

// TODO check if we need a buttonLink
// maybe a linkButton recipe to apply to a NextLink will be enough
export const ButtonLink = ({
	children,
	href,
	label,
	name,
	onClick,
}: ButtonLinkProps) => {
	return (
		<Button name={name} onClick={onClick}>
			<NextLink href={href}>
				{label}
				{children}
			</NextLink>
		</Button>
	);
};
