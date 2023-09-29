import NextLink from "next/link";
import {
	type PropsWithChildren,
	type ReactElement,
	type ReactNode,
} from "react";

import { IconButton } from "../../ui";
interface ILinkIcon {
	icon: ReactNode;
	label: string;
	path: string;
}

export interface NavbarNavSocialsProps extends PropsWithChildren {
	links: ILinkIcon[];
}

export const NavbarNavSocials = ({
	children,
	links,
}: NavbarNavSocialsProps): ReactElement => {
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
