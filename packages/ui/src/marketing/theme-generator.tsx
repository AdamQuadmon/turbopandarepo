import { Box } from "@turbopandarepo/ds/jsx";
import { useBoolean, useIsClient } from "usehooks-ts";

import { useThemeGenerator } from "../lib/use-theme-generator";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	type CardProps,
	CardTitle,
} from "../ui/card";
import { BorderRadiusSlider } from "./theme/border-radius-slider";
import { ColorPalettePicker } from "./theme/color-palette-picker";
import { FontFamilySelect } from "./theme/font-family-select";
import { GrayPalettePicker } from "./theme/gray-palette-picker";
import { ThemeConfigDialog } from "./theme/theme-config-dialog";
import { ThemeContextMenu } from "./theme/theme-context-menu";

type Props = { hideContextMenu?: boolean; onCopy?: () => void } & CardProps;

export const ThemeGenerator = (props: Props) => {
	const { hideContextMenu, onCopy, ...rest } = props;
	const { generateConfig, reset } = useThemeGenerator();
	const { setFalse, setTrue, value } = useBoolean(false);
	const isClient = useIsClient();

	if (!isClient) {
		return null;
	}

	const handleCopy = () => {
		void generateConfig();
		setTrue();
		onCopy?.();
	};

	return (
		<Card width="sm" {...rest}>
			<ThemeConfigDialog onClose={setFalse} open={value} />
			{!hideContextMenu && (
				<Box position="absolute" right="2" top="18px">
					<ThemeContextMenu onCopy={handleCopy} onReset={reset} />
				</Box>
			)}
			<CardHeader>
				<CardTitle>Make it yours</CardTitle>
				<CardDescription>
					Customize your theme and copy the config to use in your project.
				</CardDescription>
			</CardHeader>
			<CardContent gap="4">
				<FontFamilySelect />
				<GrayPalettePicker />
				<ColorPalettePicker />
				<BorderRadiusSlider />
			</CardContent>
		</Card>
	);
};
