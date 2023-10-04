"use client";
import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/css/Classic.css";
import { css, cx } from "@turbopandarepo/ds/css";
import { button } from "@turbopandarepo/ds/recipes";
import { useIsClient } from "usehooks-ts";

import { useColorMode } from "../lib/use-color-mode";

export const ColorModeButton = () => {
	const { colorMode, toggle } = useColorMode();

	const isClient = useIsClient();
	if (!isClient) {
		return null;
	}

	return (
		<Classic
			className={cx(
				button({ size: "md", variant: "ghost" }),
				css({
					px: "0",
				}),
			)}
			onToggle={toggle}
			toggled={colorMode === "light"}
		/>
	);
};
