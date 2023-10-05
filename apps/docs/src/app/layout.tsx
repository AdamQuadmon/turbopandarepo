import type { PropsWithChildren } from "react";

import { cx } from "@turbopandarepo/ds/css";
import { Head } from "@turbopandarepo/ui";
import { Analytics } from "@vercel/analytics/react";

import { firaCode, inter, jakarta, outfit, raleway } from "~/app/fonts";
import "~/app/globals.css";
import { BaseLayout } from "~/components/layout";
import { generateSiteMetadata } from "~/utils/generate-metadata";

export const generateMetadata = () => {
	return generateSiteMetadata();
};

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
			<Head />
			<body>
				<Analytics />
				<BaseLayout>{children}</BaseLayout>
			</body>
		</html>
	);
}
