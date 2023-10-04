import { type IMenuLink, IconButton } from "@turbopandarepo/ui";
import NextLink from "next/link";
import { type PropsWithChildren, type ReactElement } from "react";

export interface NavIconsProps extends PropsWithChildren {
	links: IMenuLink[];
}

export const NavIcons = ({ children, links }: NavIconsProps): ReactElement => {
	return (
		<>
			{links.map((link, id) => (
				<NextLink href={link.path} key={id} target="_blank">
					<IconButton
						aria-label={link.label}
						asChild
						name={link.label}
						variant="ghost"
					>
						{link.icon}
					</IconButton>
				</NextLink>
			))}
			{children}
		</>
	);
};
