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
} from "../../ui/radio-button-group";

export const GrayPalettePicker = () => {
	const { colorMode } = useColorMode();
	const { currentGrayPalette, grayPalettes, updateGrayPalette } =
		useThemeGenerator();

	return (
		<Stack gap="1.5">
			<Typography fontWeight="semibold" textStyle="sm">
				Gray Palette
			</Typography>
			<RadioButtonGroup
				display="grid"
				gridTemplateColumns="repeat(3, 1fr)"
				onChange={(e) => {
					updateGrayPalette(
						grayPalettes.find((grayPalette) => grayPalette.value === e.value) ??
							currentGrayPalette,
					);
				}}
				size="sm"
				value={currentGrayPalette.value}
				variant="outline"
			>
				{grayPalettes.map((grayPalette, id) => (
					<Radio
						_checked={{ borderColor: "border.outline", boxShadow: "outline" }}
						justifyContent="flex-start"
						key={id}
						value={grayPalette.value}
					>
						<RadioControl />
						<RadioLabel>
							<Circle
								size="3.5"
								style={{
									background: token.var(
										`colors.${grayPalette.value}.${
											colorMode === "dark" ? "500" : "400"
										}`,
									),
								}}
							/>
							{grayPalette.label}
						</RadioLabel>
					</Radio>
				))}
			</RadioButtonGroup>
		</Stack>
	);
};
