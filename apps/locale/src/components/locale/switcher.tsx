"use client";

import { useLocale, useTranslations } from "next-intl";
import { type ChangeEvent, useTransition } from "react";

import { Link, locales, usePathname, useRouter } from "~/navigation";

// TODO improve:
// - UX:
//   - use flags (search for react languages flags with langSwitcher package)
//   - add aria-label and others
// - API:
//   - for two languages uses alternateLocale
//   - for more languages uses alternateLocales array (maybe another component)
export default function LocaleSwitcher() {
	const t = useTranslations("LocaleSwitcher");

	const locale = useLocale();
	const otherLocale = locale === "en" ? "it" : "en";

	return (
		<Link href="/" locale={otherLocale}>
			{t("switchLocale", { locale: otherLocale })}
		</Link>
	);
}

// TODO this can be used for more than 3 languages
// fix it! for client components using translations check:
// https://next-intl-docs-git-feat-next-13-rsc-next-intl.vercel.app/docs/environments/server-client-components
export const LocaleSwitcher2 = () => {
	const t = useTranslations("Navbar.LocaleSwitcher");
	const [isPending, startTransition] = useTransition();
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
		const nextLocale = event.target.value;
		startTransition(() => {
			router.replace(pathname, { locale: nextLocale });
		});
	}

	return (
		<label>
			<p className="sr-only">{t("label")}</p>
			<select
				defaultValue={locale}
				disabled={isPending}
				onChange={onSelectChange}
			>
				{locales.map((cur) => (
					<option key={cur} value={cur}>
						{t("locale", { locale: cur })}
					</option>
				))}
			</select>
			<span>⌄</span>
		</label>
	);
};
