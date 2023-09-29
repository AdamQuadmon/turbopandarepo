import type { PropsWithChildren } from "react";

import { cx } from "@turbopandarepo/ds/css";
// import { colorModeLocalStorageKey } from "@turbopandarepo/ui";
import { Analytics } from "@vercel/analytics/react";

import { Navbar } from "~/components/layout/navbar";

import { firaCode, inter, jakarta, outfit, raleway } from "./fonts";
import "./globals.css";

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html
			className={cx(
				inter.variable,
				firaCode.variable,
				outfit.variable,
				jakarta.variable,
				raleway.variable,
			)}
			lang="en"
		>
			{/* <head>
				<ColorModeScript />
			</head> */}
			<body>
				<Analytics />
				<Navbar />
				{children}
			</body>
		</html>
	);
}

// const ColorModeScript = () => {
// 	const colorModeScript =
// 		// language=javascript
// 		`if (JSON.parse(window.localStorage.getItem('${colorModeLocalStorageKey}')) === 'dark') {document.documentElement.classList.add('dark')}`;
// 	return <script dangerouslySetInnerHTML={{ __html: colorModeScript }} />;
// };
