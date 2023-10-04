import { useTranslations } from "next-intl";

import { PageLayout } from "~/components/layout";

export default function IndexPage() {
	const t = useTranslations("Pages.Index");

	return (
		<PageLayout title={t("title")}>
			<p>
				{t.rich("description", {
					code: (chunks) => <code>{chunks}</code>,
				})}
			</p>
		</PageLayout>
	);
}
