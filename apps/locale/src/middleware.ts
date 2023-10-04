import createMiddleware from "next-intl/middleware";

import { defaultLocale, locales, pathnames } from "./navigation";

export default createMiddleware({
	// Used when no locale matches
	defaultLocale,
	// A list of all locales that are supported
	locales,
	// Don't use a locale prefix for the default locale
	localePrefix: "as-needed",
	// Domains
	domains: [
		{
			defaultLocale: "en",
			domain: "us.example.com",
			// Optionally restrict the locales managed by this domain. If this
			// domain receives requests for another locale (e.g. us.example.com/fr),
			// then the middleware will redirect to a domain that supports it.
			locales: ["en"],
		},
		{
			defaultLocale: "en",
			domain: "ca.example.com",
			// If there are no `locales` specified on a domain,
			// all global locales will be supported here.
		},
	],
	pathnames,
});

export const config = {
	// Match only internationalized pathnames
	// matcher: ["/", "/(it|en)/:path*"],
	// Matcher entries are linked with a logical "or", therefore
	// if one of them matches, the middleware will be invoked.
	matcher: [
		// Match all pathnames except for
		// - … if they start with `/api`, `/_next` or `/_vercel`
		// - … the ones containing a dot (e.g. `favicon.ico`)
		"/((?!api|_next|_vercel|.*\\..*).*)",
		// Match all pathnames within `/users`, optionally with a locale prefix
		"/(.+)?/users/(.+)",
	],
};
