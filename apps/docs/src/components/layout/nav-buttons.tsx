import { type IMenuLink } from "@turbopandarepo/ui";
import { type PropsWithChildren, type ReactElement } from "react";

import { ButtonLink } from "../button-link";

export interface NavButtonsProps extends PropsWithChildren {
	links: IMenuLink[];
}

export const NavButtons = ({
	children,
	links,
}: NavButtonsProps): ReactElement => {
	return (
		<>
			{links.map(({ label, path }) => (
				<ButtonLink href={path} key={path}>
					{label}
				</ButtonLink>
			))}
			{children}
		</>
	);
};
