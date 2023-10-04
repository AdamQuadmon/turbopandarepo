"use client";

import { Button } from "@turbopandarepo/ui";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

import { PageLayout } from "~/components/layout";

interface Props {
	error: Error;
	reset(): void;
}

export default function Error({ error, reset }: Props) {
	const t = useTranslations("Pages.Error");

	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<PageLayout title={t("title")}>
			{t.rich("description", {
				p: (chunks) => <p>{chunks}</p>,
				retry: (chunks) => (
					<Button onClick={reset} type="button">
						{chunks}
					</Button>
				),
			})}
		</PageLayout>
	);
}
