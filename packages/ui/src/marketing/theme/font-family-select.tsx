import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

import { useThemeGenerator } from "../../lib/use-theme-generator";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectItemIndicator,
	SelectItemText,
	SelectLabel,
	SelectPositioner,
	SelectTrigger,
	SelectValue,
} from "../../ui/select";

export const FontFamilySelect = () => {
	const { currentFontFamily, fontFamilies, updateFontFamily } =
		useThemeGenerator();

	return (
		<Select
			// @ts-expect-error no overload matching
			items={fontFamilies}
			onChange={(e) => {
				// @ts-expect-error wrong argument of type 'CollectionItem | undefined'
				updateFontFamily(e.items[0]);
			}}
			positioning={{ sameWidth: true }}
			size="sm"
			value={[currentFontFamily.value]}
		>
			<SelectLabel>Font Family</SelectLabel>
			<SelectTrigger>
				<SelectValue />
				<ChevronsUpDownIcon />
			</SelectTrigger>
			<SelectPositioner>
				<SelectContent>
					{fontFamilies.map((fontFamily, id) => (
						<SelectItem item={fontFamily} key={id}>
							<SelectItemText>{fontFamily.label}</SelectItemText>
							<SelectItemIndicator>
								<CheckIcon />
							</SelectItemIndicator>
						</SelectItem>
					))}
				</SelectContent>
			</SelectPositioner>
		</Select>
	);
};
