import { useTranslations } from "next-intl";

import { PageLayout } from "~/components/layout";

export default function AboutPage() {
	const t = useTranslations("Pages.About");

	return (
		<PageLayout title={t("title")}>
			{t.rich("description", {
				code: (chunks) => <code>{chunks}</code>,
				p: (chunks) => <p>{chunks}</p>,
			})}
		</PageLayout>
	);
}
