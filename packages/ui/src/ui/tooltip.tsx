import * as Ark from "@ark-ui/react/tooltip";
import { styled } from "@turbopandarepo/ds/jsx";
import { type TooltipVariantProps, tooltip } from "@turbopandarepo/ds/recipes";

import { createStyleContext } from "../lib/create-style-context";

const { withContext, withProvider } = createStyleContext(tooltip);

export type TooltipProps = Ark.TooltipProps & TooltipVariantProps;

const TooltipRoot = withProvider(styled(Ark.Tooltip.Root));
export const TooltipArrow = withContext(styled(Ark.Tooltip.Arrow), "arrow");
export const TooltipArrowTip = withContext(
	styled(Ark.Tooltip.ArrowTip),
	"arrowTip",
);
export const TooltipContent = withContext(
	styled(Ark.Tooltip.Content),
	"content",
);
export const TooltipPositioner = withContext(
	styled(Ark.Tooltip.Positioner),
	"positioner",
);
export const TooltipTrigger = withContext(
	styled(Ark.Tooltip.Trigger),
	"trigger",
);

export const Tooltip = Object.assign(TooltipRoot, {
	Arrow: TooltipArrow,
	ArrowTip: TooltipArrowTip,
	Content: TooltipContent,
	Positioner: TooltipPositioner,
	Root: TooltipRoot,
	Trigger: TooltipTrigger,
});
