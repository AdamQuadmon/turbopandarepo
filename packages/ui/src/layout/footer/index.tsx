"use client";

import type { ComponentPropsWithoutRef } from "react";

import { ark } from "@ark-ui/react";
import { styled } from "@turbopandarepo/ds/jsx";
import { type FooterVariantProps, footer } from "@turbopandarepo/ds/recipes";

import { createStyleContext } from "../../lib/create-style-context";

const { withContext, withProvider } = createStyleContext(footer);

export interface FooterProps
	extends FooterVariantProps,
		ComponentPropsWithoutRef<typeof ark.footer> {}

const FooterRoot = withProvider(styled(ark.footer), "root");

export const FooterHeader = withContext(styled(ark.div), "header");
export const FooterLeft = withContext(styled(ark.div), "left");
export const FooterCenter = withContext(styled(ark.div), "center");
export const FooterRight = withContext(styled(ark.div), "right");

export const FooterStyledNavMain = withContext(styled(ark.nav), "navMain");

export const Footer = Object.assign(FooterRoot, {
	Center: FooterCenter,
	Header: FooterHeader,
	Left: FooterLeft,
	NavMain: FooterStyledNavMain,
	Right: FooterRight,
	Root: FooterRoot,
});
