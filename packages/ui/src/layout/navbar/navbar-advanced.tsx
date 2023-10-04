"use client";
import type { ReactNode } from "react";

import { Navbar } from ".";
import { useScrollDirection } from "../../lib/use-scroll-direction";
import { ColorModeButton } from "../../marketing/color-mode-button";
import { Breadcrumbs } from "../breadcrumbs";
import { NavbarSidebar, type SitemapGroup } from "./navbar-sidebar";
import { NavbarSidebarContainer } from "./navbar-sidebar-container";

// TODO check why is not possible to style Components like NavbarSidebarContainer
// in the Navbar component, instead we need to use asChild
export const NavbarAdvanced = ({
	hasCenteredLogo,
	logo,
	navMain,
	navSide,
	navSocials,
	pathname,
}: NavbarAdvancedProps) => {
	const scrollDirection = useScrollDirection();
	const shouldRenderSidebar = pathname !== "/no-sidebar";
	return (
		<Navbar
			data-tp-navbar
			data-tp-navbar-scroll={scrollDirection}
			role="banner"
		>
			<Navbar.Header>
				<Navbar.Left>
					{shouldRenderSidebar && (
						<>
							<Breadcrumbs pathname={pathname} />
							<Navbar.SidebarContainer asChild>
								<NavbarSidebarContainer pathname={pathname}>
									<>
										{logo}
										{navSide && (
											<Navbar.Sidebar asChild>
												<NavbarSidebar pathname={pathname} sitemap={navSide} />
											</Navbar.Sidebar>
										)}
									</>
								</NavbarSidebarContainer>
							</Navbar.SidebarContainer>
						</>
					)}
					{logo}
					{navMain && <Navbar.NavMain>{navMain}</Navbar.NavMain>}
				</Navbar.Left>
				<Navbar.Center>{hasCenteredLogo && logo}</Navbar.Center>
				<Navbar.Right>
					{navSocials && <Navbar.NavSocials>{navSocials}</Navbar.NavSocials>}
					<ColorModeButton />
				</Navbar.Right>
			</Navbar.Header>
		</Navbar>
	);
};

export type NavbarPositions = "center" | "left" | "right";

// TODO check compositions patterns and implement functionalities if possible
// or move component to app level
export interface NavbarAdvancedProps {
	// cta?: ReactNode;
	// ctaPosition?: NavbarPositions;
	// prefer variant
	// className?: string;
	hasCenteredLogo?: boolean;
	logo?: ReactNode;
	navMain?: ReactNode;
	// search?: boolean;
	navSide?: SitemapGroup[];
	navSocials?: ReactNode;
	// notifications?: boolean;
	// profile?:
	// 	| {
	// 			showAvatarNickname?: boolean;
	// 			showSignUp?: boolean;
	// 	  }
	// 	| boolean;
	pathname: string;
	// themeSwitcher?:
	// 	| {
	// 			position?: "left" | "right";
	// 	  }
	// 	| boolean;
}

export interface IMenuLink {
	children?: IMenuLink[];
	childrenLayout?: {
		direction?: "column" | "row";
		footerButtons: ReactNode[];
	};
	description?: string;
	icon?: ReactNode;
	label: string;
	path: string;
}
