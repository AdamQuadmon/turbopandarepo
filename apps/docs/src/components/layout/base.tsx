"use client";

import type { PropsWithChildren } from "react";

import { Container } from "@turbopandarepo/ds/jsx";
import { FooterAdvanced, NavbarAdvanced } from "@turbopandarepo/ui";
import { usePathname } from "next/navigation";

import { navFooter, navMain, navSide, navSocials } from "~/navigations";

import { Logo } from "../logo";
import { NavButtons } from "./nav-buttons";
import { NavIcons } from "./nav-icons";
import { NavLinks } from "./nav-links";

// TODO make Layout Recipe
// This is a client component because Navbar and Footer needs pathname
// Better to wrap Navbar and Footer in a client component to make this a server component
export const BaseLayout = ({ children }: PropsWithChildren) => {
	const pathname = usePathname();
	return (
		<Container>
			<NavbarAdvanced
				logo={<Logo />}
				navMain={<NavLinks links={navMain} />}
				navSide={navSide}
				navSocials={<NavIcons links={navSocials} />}
				pathname={pathname}
			/>
			<Container id="skip">{children}</Container>
			<FooterAdvanced
				direction="horizontal"
				hasCenteredLogo
				logo={<Logo />}
				navMain={<NavButtons links={navFooter} />}
			>
				{/* <ThemeSwitcher /> */}
			</FooterAdvanced>
		</Container>
	);
};
