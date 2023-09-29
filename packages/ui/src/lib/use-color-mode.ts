"use client";

import { useEffectOnce, useLocalStorage, useUpdateEffect } from "usehooks-ts";

type ColorMode = "dark" | "light";

export const colorModeLocalStorageKey = "park-ui-color-mode";

interface UseColorModeOutput {
	colorMode: ColorMode;
	toggle: () => void;
}

export const useColorMode = (): UseColorModeOutput => {
	const [colorMode, setColorMode] = useLocalStorage<ColorMode>(
		colorModeLocalStorageKey,
		"light",
	);

	const syncColorMode = () => {
		colorMode === "dark"
			? document.documentElement.classList.add("dark")
			: document.documentElement.classList.remove("dark");
	};

	useEffectOnce(syncColorMode);

	useUpdateEffect(syncColorMode, [colorMode]);

	return {
		colorMode,
		toggle: () => {
			setColorMode((prev: ColorMode): ColorMode => {
				return prev === "dark" ? "light" : "dark";
			});
		},
	};
};
