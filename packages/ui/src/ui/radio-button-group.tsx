import * as Ark from "@ark-ui/react/radio-group";
import { styled } from "@turbopandarepo/ds/jsx";
import {
	type RadioButtonGroupVariantProps,
	radioButtonGroup,
} from "@turbopandarepo/ds/recipes";

import { createStyleContext } from "../lib/create-style-context";

const { withContext, withProvider } = createStyleContext(radioButtonGroup);

export type RadioGroupProps = Ark.RadioGroupProps &
	RadioButtonGroupVariantProps;

const RadioGroupRoot = withProvider(styled(Ark.RadioGroup.Root), "root");
const RadioGroupLabel = withContext(styled(Ark.RadioGroup.Label), "label");
const Radio = withContext(styled(Ark.RadioGroup.Radio), "radio");
const RadioLabel = withContext(styled(Ark.RadioGroup.RadioLabel), "radioLabel");
const RadioControl = withContext(
	styled(Ark.RadioGroup.RadioControl),
	"radioControl",
);

const RadioButtonGroup = Object.assign(RadioGroupRoot, {
	Label: RadioGroupLabel,
	Radio: Radio,
	RadioControl: RadioControl,
	RadioLabel: RadioLabel,
	Root: RadioGroupRoot,
});

export { Radio, RadioButtonGroup, RadioControl, RadioGroupLabel, RadioLabel };
