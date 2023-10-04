import type { PropsWithChildren } from "react";

import { cx } from "@turbopandarepo/ds/css";
import { Head } from "@turbopandarepo/ui";
import { Analytics } from "@vercel/analytics/react";
import pick from "lodash/pick";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { NextSeo } from "next-seo";
// TODO implement SEO metadata
// import { generateSeoMetadata } from "@/seo.config";

import { firaCode, inter, jakarta, outfit, raleway } from "~/app/fonts";
import "~/app/globals.css";
import { BaseLayout } from "~/components/layout";
import { locales } from "~/navigation";

interface LocaleLayoutProps extends PropsWithChildren {
	params: {
		locale: string;
	};
}

export default function LocaleLayout({
	children,
	params: { locale },
}: LocaleLayoutProps) {
	// / Validate that the incoming `locale` parameter is valid
	if (!locales.includes(locale as never)) {
		notFound();
	}

	// TODO: check this, seems to be only used for Error Pages
	// do we need it?
	const messages = useMessages();

	const seo = {
		canonical: "https://panda-css.com",
		description:
			"Panda CSS is a minimal, responsive, and modern CSS framework.",
		openGraph: {
			description:
				"Panda CSS is a minimal, responsive, and modern CSS framework.",
			locale: "en_US",
			type: "website",
			url: "https://panda-css.com",
		},
		title: "Panda CSS",
	};
	return (
		<html
			className={cx(
				inter.variable,
				firaCode.variable,
				outfit.variable,
				jakarta.variable,
				raleway.variable,
			)}
			lang={locale}
		>
			<Head>
				<NextSeo
					canonical={seo.canonical}
					description={seo.description}
					openGraph={seo.openGraph}
					title={seo.title}
				/>
			</Head>
			<body>
				<Analytics />
				<NextIntlClientProvider
					locale={locale}
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
					messages={pick(messages, "Pages.Error")}
				>
					<BaseLayout>{children}</BaseLayout>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
