import { Circle, Stack } from "@turbopandarepo/ds/jsx";
import { token } from "@turbopandarepo/ds/tokens";

import { useColorMode } from "../../lib/use-color-mode";
import { useThemeGenerator } from "../../lib/use-theme-generator";
import { Typography } from "../../ui";
import {
	Radio,
	RadioButtonGroup,
	RadioControl,
	RadioLabel,
} from "../../with-context";

export const ColorPalettePicker = () => {
	const { colorMode } = useColorMode();
	const { colorPalettes, currentColorPalette, updateColorPalette } =
		useThemeGenerator();

	return (
		<Stack gap="1.5">
			<Typography fontWeight="semibold" textStyle="sm">
				Color
			</Typography>
			<RadioButtonGroup
				display="grid"
				gridTemplateColumns="repeat(3, 1fr)"
				// TODO: check why it is not getting onChange type (Props)
				onChange={(e: { value: string }) => {
					updateColorPalette(
						colorPalettes.find(
							(colorPalette) => colorPalette.value === e.value,
						) ?? currentColorPalette,
					);
				}}
				size="sm"
				value={currentColorPalette.value}
				variant="outline"
			>
				{colorPalettes.map((colorPalette, id) => (
					<Radio
						justifyContent="flex-start"
						key={id}
						value={colorPalette.value}
					>
						<RadioControl />
						<RadioLabel>
							<Circle
								size="3.5"
								style={{
									background: token.var(
										`colors.${colorPalette.value}.${
											colorMode === "light" ? "600" : "300"
										}`,
									),
								}}
							/>
							{colorPalette.label}
						</RadioLabel>
					</Radio>
				))}
			</RadioButtonGroup>
		</Stack>
	);
};
