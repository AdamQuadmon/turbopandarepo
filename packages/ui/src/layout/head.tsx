"use client";

import type { PropsWithChildren } from "react";

import NextHead from "next/head";

import { colorModeLocalStorageKey } from "../lib/use-color-mode";

interface HeadProps extends PropsWithChildren {
	faviconGlyph?: string;
	theme?: "dark" | "light";
	usePreferredColorScheme?: boolean;
}

// TODO check nextJs head
export const Head = ({
	children,
	faviconGlyph = "🐼",
	theme = "dark",
	usePreferredColorScheme = false,
}: HeadProps) => {
	return (
		<>
			{children}
			<NextHead>
				<ColorModeScript colorModeLocalStorageKey={colorModeLocalStorageKey} />
				{faviconGlyph && (
					<link
						href={`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50' y='.9em' font-size='90' text-anchor='middle'>${faviconGlyph}</text><style>text{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";fill:black}@media(prefers-color-scheme:dark){text{fill:white}}</style></svg>`}
						rel="icon"
					/>
				)}

				{usePreferredColorScheme ? (
					<>
						<meta
							content="#fff"
							media="(prefers-color-scheme: light)"
							name="theme-color"
						/>
						<meta
							content="#111"
							media="(prefers-color-scheme: dark)"
							name="theme-color"
						/>
					</>
				) : (
					<meta
						content={theme === "dark" ? "#111" : "#fff"}
						name="theme-color"
					/>
				)}
			</NextHead>
		</>
	);
};

const ColorModeScript = ({
	colorModeLocalStorageKey,
}: {
	colorModeLocalStorageKey: string;
}) => {
	const colorModeScript =
		// language=javascript
		`if (JSON.parse(window.localStorage.getItem('${colorModeLocalStorageKey}')) === 'dark') {document.documentElement.classList.add('dark')}`;
	return <script dangerouslySetInnerHTML={{ __html: colorModeScript }} />;
};
