import type { ComponentPropsWithoutRef } from "react";

import { ark } from "@ark-ui/react";
import { styled } from "@turbopandarepo/ds/jsx";
import { type BadgeVariantProps, badge } from "@turbopandarepo/ds/recipes";

export type BadgeProps = BadgeVariantProps &
	ComponentPropsWithoutRef<typeof ark.div>;
export const Badge = styled(ark.div, badge);
