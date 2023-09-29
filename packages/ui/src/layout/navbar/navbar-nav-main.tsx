"use client";

import { navbar } from "@turbopandarepo/ds/recipes";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { type PropsWithChildren, type ReactElement } from "react";

interface ILink {
	label: string;
	path: string;
}

export interface NavbarNavMainProps extends PropsWithChildren {
	links: ILink[];
}

export const NavbarNavMain = ({
	children,
	links,
}: NavbarNavMainProps): ReactElement => {
	const classes = navbar();
	const pathName = usePathname();
	return (
		<>
			{links.map((link, id) => (
				<NextLink
					aria-current={isCurrentPath(link.path, pathName)}
					className={classes.linkNav}
					href={link.path}
					key={id}
				>
					{link.label}
				</NextLink>
			))}
			{children}
		</>
	);
};

const isCurrentPath = (path: string, pathName: string): "page" | undefined =>
	pathName.includes(path) ? "page" : undefined;
