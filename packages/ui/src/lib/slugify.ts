export const slugify = (x = "") =>
	x
		.toLowerCase()
		// eslint-disable-next-line regexp/strict
		.replace(/[^\w\s-+&]/g, "")
		.replace(/\s+/g, "-")
		.replace(/[-&+]+/g, "-")
		.replace(/^-+|-+$/g, "");
