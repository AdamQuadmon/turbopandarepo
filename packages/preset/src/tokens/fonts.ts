import { defineTokens } from "@pandacss/dev";

// check font implementation
export const fonts = defineTokens.fonts({
	// sans: { value: 'var(--font-sans)' },
	// serif: { value: 'var(--font-serif)' },
	// mono: { value: 'var(--font-mono)' },
	//
	// body: { value: "Inter, sans-serif" },
	// heading: { value: ["Roboto Mono", "sans-serif"] },
	body: { value: "var(--font-mona-sans), sans-serif" },
	heading: { value: "var(--font-mona-sans), sans-serif" },
	mono: { value: "var(--font-fira-code), Menlo, monospace" },
});
