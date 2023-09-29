import type { ReactElement } from "react";

import { ark } from "@ark-ui/react";
import { type HTMLStyledProps, styled } from "@turbopandarepo/ds/jsx";
import { type IconVariantProps, icon } from "@turbopandarepo/ds/recipes";

export interface IconProps extends IconVariantProps, HTMLStyledProps<"svg"> {
	children: ReactElement;
}

const StyledIcon = styled(ark.svg, icon);

export const Icon = (props: IconProps) => {
	return <StyledIcon asChild {...props} />;
};
