import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import type {
	BorderRadii,
	ColorPalette,
	FontFamily,
	GrayPalette,
	ThemeConfig,
} from "./use-theme-generator";

interface State {
	borderRadii: BorderRadii;
	colorPalette: ColorPalette;
	fontFamily: FontFamily;
	grayPalette: GrayPalette;
	themeConfig: ThemeConfig;
}

interface Actions {
	reset: () => void;
	setBorderRadii: (borderRadii: BorderRadii) => void;
	setColorPalette: (palette: ColorPalette) => void;
	setFontFamily: (font: FontFamily) => void;
	setGrayPalette: (palette: GrayPalette) => void;
	setThemeConfig: (themeConfig: ThemeConfig) => void;
}

const initialState: State = {
	borderRadii: 2,
	colorPalette: { label: "Neutral", value: "neutral" },
	fontFamily: { label: "Jakarta", value: "var(--font-body)" },
	grayPalette: { label: "Neutral", value: "neutral" },
	themeConfig: { code: "", config: "" },
};

export const useThemeStore = create<State & Actions>()(
	devtools(
		persist(
			(set) => ({
				...initialState,
				reset: () => {
					set(initialState);
				},
				setBorderRadii: (borderRadii) => {
					set(() => ({ borderRadii }));
				},
				setColorPalette: (colorPalette) => {
					set(() => ({ colorPalette }));
				},
				setFontFamily: (fontFamily) => {
					set(() => ({ fontFamily }));
				},
				setGrayPalette: (grayPalette) => {
					set(() => ({ grayPalette }));
				},
				setThemeConfig: (themeConfig) => {
					set(() => ({ themeConfig }));
				},
			}),
			{
				name: "park-ui-theme-store",
			},
		),
	),
);
