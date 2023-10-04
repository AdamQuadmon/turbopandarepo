"use client";

import type { ComponentPropsWithoutRef } from "react";

import { ark } from "@ark-ui/react";
import { styled } from "@turbopandarepo/ds/jsx";
import { type NavbarVariantProps, navbar } from "@turbopandarepo/ds/recipes";

import { createStyleContext } from "../../lib/create-style-context";

const { withContext, withProvider } = createStyleContext(navbar);

export type NavbarProps = NavbarVariantProps &
	ComponentPropsWithoutRef<typeof ark.nav>;

const NavbarRoot = withProvider(styled(ark.nav), "root");

export const NavbarHeader = withContext(styled(ark.div), "header");
export const NavbarLeft = withContext(styled(ark.div), "left");
export const NavbarCenter = withContext(styled(ark.div), "center");
export const NavbarRight = withContext(styled(ark.div), "right");

export const NavbarStyledNavMain = withContext(styled(ark.div), "navMain");
export const NavbarStyledNavSocials = withContext(
	styled(ark.div),
	"navSocials",
);

export const NavbarSidebarSwitch = withContext(ark.div, "sidebarSwitch");
export const NavbarStyledSidebarContainer = withContext(
	styled(ark.div),
	"sidebarContainer",
);
export const NavbarStyledSidebar = withContext(ark.div, "sidebar");

export const Navbar = Object.assign(NavbarRoot, {
	Center: NavbarCenter,
	Header: NavbarHeader,
	Left: NavbarLeft,
	NavMain: NavbarStyledNavMain,
	NavSocials: NavbarStyledNavSocials,
	Right: NavbarRight,
	Root: NavbarRoot,
	Sidebar: NavbarStyledSidebar,
	SidebarContainer: NavbarStyledSidebarContainer,
	SidebarSwitch: NavbarSidebarSwitch,
});
