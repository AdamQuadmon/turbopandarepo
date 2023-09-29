import type { ComponentPropsWithoutRef } from "react";

import { ark } from "@ark-ui/react";
import { styled } from "@turbopandarepo/ds/jsx";
import { type CardVariantProps, card } from "@turbopandarepo/ds/recipes";

import { createStyleContext } from "../lib/create-style-context";

const { withContext, withProvider } = createStyleContext(card);

export type CardProps = CardVariantProps &
	ComponentPropsWithoutRef<typeof ark.div>;

const CardRoot = withProvider(styled(ark.div), "root");
export const CardContent = withContext(styled(ark.div), "content");
export const CardDescription = withContext(styled(ark.p), "description");
export const CardFooter = withContext(styled(ark.div), "footer");
export const CardHeader = withContext(styled(ark.div), "header");
export const CardTitle = withContext(styled(ark.h3), "title");

export const Card = Object.assign(CardRoot, {
	Content: CardContent,
	Description: CardDescription,
	Footer: CardFooter,
	Header: CardHeader,
	Root: CardRoot,
	Title: CardTitle,
});
