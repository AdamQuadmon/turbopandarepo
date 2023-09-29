import { defineLayerStyles } from "@pandacss/dev";

export const layerStyles = defineLayerStyles({
	offShadow: {
		value: {
			border: "3px solid var(--shadow-color, black)",
			boxShadow: "4px 4px 0px 0px var(--shadow-color, black)",
		},
	},
	section: {
		value: {
			backgroundColor: "bg.inverted",
			borderRadius: "md",
			boxShadow: "lg",
			paddingBottom: "5",
			paddingLeft: "4",
			paddingRight: "4",
			paddingTop: "5",
		},
	},
});
