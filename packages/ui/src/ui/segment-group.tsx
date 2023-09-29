import * as Ark from "@ark-ui/react/segment-group";
import { styled } from "@turbopandarepo/ds/jsx";
import {
	type SegmentGroupVariantProps,
	segmentGroup,
} from "@turbopandarepo/ds/recipes";

import { createStyleContext } from "../lib/create-style-context";

const { withContext, withProvider } = createStyleContext(segmentGroup);

export type SegmentGroupProps = Ark.SegmentGroupProps &
	SegmentGroupVariantProps;

const SegmentGroupRoot = withProvider(styled(Ark.SegmentGroup.Root), "root");
export const SegmentGroupLabel = withContext(
	styled(Ark.SegmentGroup.Label),
	"label",
);
export const SegmentGroupIndicator = withContext(
	styled(Ark.SegmentGroup.Indicator),
	"indicator",
);
export const Segment = withContext(styled(Ark.SegmentGroup.Segment), "radio");
export const SegmentLabel = withContext(
	styled(Ark.SegmentGroup.SegmentLabel),
	"radioLabel",
);
export const SegmentControl = withContext(
	styled(Ark.SegmentGroup.SegmentControl),
	"radioControl",
);

export const SegmentGroup = Object.assign(SegmentGroupRoot, {
	Indicator: SegmentGroupIndicator,
	Label: SegmentGroupLabel,
	Root: SegmentGroupRoot,
	Segment: Segment,
	SegmentControl: SegmentControl,
	SegmentLabel: SegmentLabel,
});
