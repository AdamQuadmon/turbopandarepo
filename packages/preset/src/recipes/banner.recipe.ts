import { defineSlotRecipe } from "@pandacss/dev";

const slots = ["root", "content", "closeButton", "closeIcon"];

export const banner = defineSlotRecipe({
	base: {
		closeButton: {
			_dark: { color: "white" },
			_hover: { opacity: 1 },
			color: "slate.50",
			h: 8,
			opacity: 0.8,
			w: 8,
		},
		closeIcon: {
			h: 4,
			mx: "auto",
			w: 4,
		},
		content: {
			fontWeight: "medium",
			px: 4,
			textAlign: "center",
			textStyle: "sm",
			truncate: true,
			w: "full",
		},
		root: {
			"& ~ div": {
				"& .sidebar-container": {
					// pt: '1.5rem'
				},
				"&.nav-container": {
					md: { top: 0 },
					top: 10,
				},
			},
			_dark: {
				bg: "linear-gradient(1deg,#383838,#212121)",
				color: "white",
			},
			_ltr: { pl: 10 },
			_print: { display: "none" },
			_rtl: { pr: 10 },
			alignItems: "center",
			bg: "neutral.900",
			"body.banner-hidden &": {
				"& ~ div": {
					"& .sidebar-container": {
						pt: "16",
					},
					"&.nav-container": {
						top: 0,
					},
				},
				display: "none",
			},
			color: "slate.50",
			display: "flex",
			h: "var(--banner-height)",
			md: { position: "relative" },
			position: "sticky",
			px: 2,
			top: 0,
			zIndex: 20,
		},
	},
	className: "bannerRecipe",
	description: "A banner style",
	slots,
});
