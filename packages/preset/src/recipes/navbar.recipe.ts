import { defineSlotRecipe } from "@pandacss/dev";

const slots = [
	"blur",
	"center",
	"header",
	"left",
	"linkChat",
	"linkIcon",
	"linkLogo",
	"linkMenu",
	"linkNav",
	"linkText",
	"mobile",
	"navMain",
	"navSocials",
	"right",
	"root",
	"sidebar",
	"sidebarContainer",
	"sidebarSwitch",
];

export const navbar = defineSlotRecipe({
	base: {
		blur: {
			_dark: {
				bg: "dark",
				shadow: "0 -1px 0 rgba(255,255,255,.1) inset",
			},
			_moreContrast: {
				_dark: { shadow: "0 0 0 1px #fff" },
				shadow: "0 0 0 1px #000",
			},
			_supportsBackdrop: {
				_dark: {
					backgroundColor: "hsla(0,0%,7%,.8) !important",
				},
				backdropFilter: "blur(8px)",
				backgroundColor: "rgba(255, 255, 255, 0.85) !important",
			},
			bg: "white",
			h: "full",
			pointerEvents: "none",
			position: "absolute",
			shadow: "0 2px 4px rgba(0,0,0,.02),0 1px 0 rgba(0,0,0,.06)",
			w: "full",
			zIndex: -1,
		},
		center: {
			alignItems: "center",
			display: "flex",
			gap: 2,
			h: "var(--navbar-height)",
			justifyContent: "flex-end",
			maxW: "90rem",
			mx: "auto",
			pl: "max(env(safe-area-inset-left),1.5rem)",
			pr: "max(env(safe-area-inset-right),1.5rem)",
		},
		header: {
			borderBottomWidth: "1px",
			display: "flex",
			gap: 8,
			justifyContent: "space-between",
			position: "relative",
			px: { base: "", md: "4" },
			py: { base: "2", md: "3" },
		},
		left: {
			display: "flex",
			gap: 10,
		},
		linkIcon: {
			h: "18px",
			minW: "18px",
			p: 0.5,
			rounded: "sm",
		},
		linkLogo: {
			_hover: { opacity: 0.75 },
			_ltr: { mr: "auto" },
			_rtl: { ml: "auto" },
			alignItems: "center",
			display: "flex",
		},
		linkMenu: {
			display: "flex",
			gap: 1,
		},
		linkNav: {
			display: { base: "none", md: "inline-block" },
			ml: -2,
			p: 2,
			position: "relative",
			whiteSpace: "nowrap",
		},
		linkText: {
			insetX: 0,
			position: "absolute",
			textAlign: "center",
		},
		navMain: {
			display: { base: "none", lg: "flex" },
			gap: 8,
		},
		navSocials: {
			display: "flex",
			gap: 0.5,
		},
		right: {
			display: "flex",
			gap: 10,
		},
		root: {
			_print: { display: "none" },
			bg: "bg.default",
			position: "sticky",
			top: 0,
			w: "full",
			// zIndex: "sticky",
			zIndex: 20,
		},
		sidebar: {},
		sidebarContainer: {},
		sidebarSwitch: {
			borderBottomWidth: "1px",
			display: { base: "flex", lg: "none" },
			gap: 2,
			py: 1,
		},
	},
	className: "navbar",
	description: "A navbar style",
	jsx: ["Navbar"],
	slots,
	variants: {
		size: {
			md: {},
		},
		variant: {
			main: {},
		},
	},
});
