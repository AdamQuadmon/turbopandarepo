import {
	type Pathnames,
	createLocalizedPathnamesNavigation,
} from "next-intl/navigation";

export const locales = ["en", "it"] as const;
export const defaultLocale = "en" as const;

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
	// If all locales use the same pathname, a
	// single external path can be provided.
	"/": "/",
	"/blog": "/blog",

	// If locales use different paths, you can
	// specify each external path per locale.
	"/about": {
		en: "/about",
		it: "/chi-siamo",
	},

	// Dynamic params are supported via square brackets
	"/news/[articleSlug]-[articleId]": {
		en: "/news/[articleSlug]-[articleId]",
		it: "/notizie/[articleSlug]-[articleId]",
	},

	// Also (optional) catch-all segments are supported
	"/categories/[...slug]": {
		en: "/categories/[...slug]",
		it: "/categorie/[...slug]",
	},
} satisfies Pathnames<typeof locales>;

export const { Link, getPathname, redirect, usePathname, useRouter } =
	createLocalizedPathnamesNavigation({ locales, pathnames });
