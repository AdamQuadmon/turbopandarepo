"use client";

import { ark } from "@ark-ui/react";
import { styled } from "@turbopandarepo/ds/jsx";
import { type NavbarVariantProps, navbar } from "@turbopandarepo/ds/recipes";

import { createStyleContext } from "../../lib/create-style-context";
import { Navbar as BNavbar, type NavbarProps as BNavbarProps } from "./navbar";
import { NavbarNavMain as BNavbarNavMain } from "./navbar-nav-main";
import { NavbarNavSocials as BNavbarNavSocials } from "./navbar-nav-socials";
import { NavbarSidebar as BNavbarSidebar } from "./navbar-sidebar";
import { NavbarSidebarContainer as BNavbarSidebarContainer } from "./navbar-sidebar-container";
import { NavbarSidebarSwitch as BNavbarSidebarSwitch } from "./navbar-sidebar-switch";

// see https://www.faststore.dev/components/organisms/navbar

const { withContext, withProvider } = createStyleContext(navbar);

export type NavbarProps = NavbarVariantProps & BNavbarProps;

const NavbarRoot = withProvider(styled(BNavbar), "root");

export const NavbarHeader = withContext(styled(ark.div), "header");
export const NavbarLeft = withContext(styled(ark.div), "navLeft");
export const NavbarCenter = withContext(styled(ark.div), "navCenter");
export const NavbarRight = withContext(styled(ark.div), "navRight");

export const NavbarNavMain = withContext(styled(BNavbarNavMain), "navMain");
export const NavbarNavSocials = withContext(
	styled(BNavbarNavSocials),
	"navSocials",
);

export const NavbarSidebar = withContext(BNavbarSidebar, "sidebar");
export const NavbarSidebarSwitch = withContext(
	BNavbarSidebarSwitch,
	"sidebarSwitch",
);
export const NavbarSidebarContainer = withContext(
	styled(BNavbarSidebarContainer),
	"sidebarContainer",
);

export const Navbar = Object.assign(NavbarRoot, {
	Center: NavbarCenter,
	Header: NavbarHeader,
	Left: NavbarLeft,
	NavMain: NavbarNavMain,
	NavSocials: NavbarNavSocials,
	Right: NavbarRight,
	Root: NavbarRoot,
	Sidebar: NavbarSidebar,
	SidebarContainer: NavbarSidebarContainer,
	SidebarSwitch: NavbarSidebarSwitch,
});
