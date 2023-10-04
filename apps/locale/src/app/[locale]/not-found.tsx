import { useTranslations } from "next-intl";

import { PageLayout } from "~/components/layout";

// Note that `app/[locale]/[...catchAll]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
	const t = useTranslations("Pages.NotFound");

	return (
		<PageLayout title={t("title")}>
			<p>{t("description")}</p>
		</PageLayout>
	);
}
