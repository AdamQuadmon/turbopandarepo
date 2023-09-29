import {
	type BorderRadii,
	useThemeGenerator,
} from "../../lib/use-theme-generator";
import {
	Slider,
	SliderControl,
	SliderLabel,
	SliderRange,
	SliderThumb,
	SliderTrack,
} from "../../ui/slider";

export const BorderRadiusSlider = () => {
	const { currentBorderRadii, updateBorderRadii } = useThemeGenerator();

	return (
		<Slider
			max={6}
			min={0}
			onChange={(e) => {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
				updateBorderRadii(Number(e.value) as BorderRadii);
			}}
			value={currentBorderRadii}
		>
			<SliderLabel>Radius</SliderLabel>
			<SliderControl>
				<SliderTrack>
					<SliderRange />
				</SliderTrack>
				<SliderThumb />
			</SliderControl>
		</Slider>
	);
};
