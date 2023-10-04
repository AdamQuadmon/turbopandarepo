export const addI18n = {
	description: "Adds a i18n plugin",
	prompts: [
		{
			choices: ["docs"],
			default: "docs",
			message: "Select which app to update.",
			name: "app",
			type: "list",
		},
		{
			choices: [
				"next-intl",
				// "next-international",
				// "next-i18n-router",
				// "i18nexus",
			],
			default: "next-intl",
			message: "Select which plugin to use.",
			name: "plugin",
			type: "list",
		},
		{
			default: "locales",
			message: "Select locales to use (es: en, es, it, nl).",
			name: "locales",
			type: "input",
		},
	],
	// Actions
	actions: [
		// Add Messages
		{
			path: "apps/{{kebabCase app}}/messages/en.json",
			skipIfExists: true,
			templateFile: "templates/i18n/messages.en.json.hbs",
			type: "add",
		},
		// Modify NextConfig
		{
			path: "apps/{{kebabCase app}}/next.config.js",
			pattern: /(\/\/ plop-imports:)/g,
			template: 'const withNextIntl = require("next-intl/plugin")();',
			type: "append",
		},
		{
			path: "apps/{{kebabCase app}}/next.config.js",
			pattern: /(module.exports = nextConfig)/g,
			template: "module.exports = withNextIntl(nextConfig)",
			type: "modify",
		},
		// Add src/i18n.ts
		{
			path: "apps/{{kebabCase app}}/src/i18n.ts",
			templateFile: "templates/i18n/src.i18n.ts.hbs",
			type: "add",
		},
		// Add src/middleware.ts
		{
			path: "apps/{{kebabCase app}}/src/middleware.ts",
			templateFile: "templates/i18n/src.middleware.ts.hbs",
			type: "add",
		},
		// Move files to src/[locale]
		{
			dest: "apps/{{kebabCase app}}/src/app/[locale]/layout.tsx",
			src: "apps/{{kebabCase app}}/src/app/layout.tsx",
			type: "copy",
		},
		{
			dest: "apps/{{kebabCase app}}/src/app/[locale]/default.tsx",
			src: "apps/{{kebabCase app}}/src/app/default.tsx",
			type: "copy",
		},
		{
			dest: "apps/{{kebabCase app}}/src/app/[locale]/global-error.tsx",
			src: "apps/{{kebabCase app}}/src/app/global-error.tsx",
			type: "copy",
		},
		{
			dest: "apps/{{kebabCase app}}/src/app/[locale]/not-found.tsx",
			src: "apps/{{kebabCase app}}/src/app/not-found.tsx",
			type: "copy",
		},
		{
			dest: "apps/{{kebabCase app}}/src/app/[locale]/page.tsx",
			src: "apps/{{kebabCase app}}/src/app/page.tsx",
			type: "copy",
		},
		// Modify layout.tsx
		// rename component to LocaleLayout({children, params: {locale}})
		// append
		// - // Validate that the incoming `locale` parameter is valid
		// - if (!locales.includes(locale as any)) notFound();
		// replace <html lang={locale}>
		// add const locales = [{{toArray locales}}];
	],
};
