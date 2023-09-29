"use client";

import { type PropsWithChildren, type ReactElement } from "react";

import { useScrollDirection } from "../../lib/use-scroll-direction";

export type NavbarProps = PropsWithChildren;

export const Navbar = ({ children }: NavbarProps): ReactElement => {
	const scrollDirection = useScrollDirection();
	return (
		<nav data-tp-navbar data-tp-navbar-scroll={scrollDirection} role="banner">
			{children}
		</nav>
	);
};
