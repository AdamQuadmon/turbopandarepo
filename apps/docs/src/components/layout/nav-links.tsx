import type { IMenuLink } from "@turbopandarepo/ui";

import { navbar } from "@turbopandarepo/ds/recipes";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { type PropsWithChildren, type ReactElement } from "react";

export interface NavLinksProps extends PropsWithChildren {
	links: IMenuLink[];
}

export const NavLinks = ({ children, links }: NavLinksProps): ReactElement => {
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
