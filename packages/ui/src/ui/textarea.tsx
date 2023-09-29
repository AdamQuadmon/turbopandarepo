import type { ComponentPropsWithoutRef } from "react";

import { ark } from "@ark-ui/react";
import { styled } from "@turbopandarepo/ds/jsx";
import {
	type TextareaVariantProps,
	textarea,
} from "@turbopandarepo/ds/recipes";

export type TextareaProps = TextareaVariantProps &
	ComponentPropsWithoutRef<typeof ark.textarea>;
export const Textarea = styled(ark.textarea, textarea);
