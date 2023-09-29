import { HStack } from "@turbopandarepo/ds/jsx";
import { CopyIcon, MoreVerticalIcon, RotateCcwIcon } from "lucide-react";

import { IconButton } from "../../ui";
import {
	Menu,
	MenuContent,
	MenuItem,
	MenuPositioner,
	MenuTrigger,
} from "../../ui/menu";

interface Props {
	onCopy: () => void;
	onReset: () => void;
}

export const ThemeContextMenu = (props: Props) => {
	const { onCopy, onReset } = props;
	return (
		<Menu positioning={{ placement: "bottom-end" }} size="xs">
			<MenuTrigger asChild>
				<IconButton aria-label="Open Menu" size="sm" variant="ghost">
					<MoreVerticalIcon />
				</IconButton>
			</MenuTrigger>
			<MenuPositioner>
				<MenuContent minW="48">
					<MenuItem
						id="copy"
						onClick={() => {
							onCopy();
						}}
					>
						<HStack gap="2">
							<CopyIcon />
							Copy Config
						</HStack>
					</MenuItem>
					<MenuItem
						id="reset"
						onClick={() => {
							onReset();
						}}
					>
						<HStack gap="2">
							<RotateCcwIcon />
							Restore Defaults
						</HStack>
					</MenuItem>
				</MenuContent>
			</MenuPositioner>
		</Menu>
	);
};
