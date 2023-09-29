"use client";
import { link } from "@turbopandarepo/ds/recipes";
import { ChevronDownIcon } from "lucide-react";

import {
	Popover,
	PopoverContent,
	PopoverPositioner,
	type PopoverProps,
	PopoverTrigger,
} from "../ui/popover";
import { ThemeGenerator } from "./theme-generator";

export const ThemePopover = (props: PopoverProps) => {
	return (
		<Popover {...props} positioning={{ offset: { mainAxis: 8 } }}>
			{(api) => (
				<>
					<PopoverTrigger className={link({ variant: "navbar" })}>
						Theme <PopoverIcon isOpen={api.isOpen} />
					</PopoverTrigger>
					<PopoverPositioner>
						<PopoverContent borderWidth="0" lazyMount p="0" unmountOnExit>
							<ThemeGenerator
								onCopy={() => {
									api.close();
								}}
							/>
						</PopoverContent>
					</PopoverPositioner>
				</>
			)}
		</Popover>
	);
};

const PopoverIcon = (props: { isOpen: boolean }) => {
	const iconStyles = {
		height: "18px",
		transform: props.isOpen ? "rotate(-180deg)" : undefined,
		transformOrigin: "center",
		transition: "transform 0.2s",
		width: "18px",
	};
	return <ChevronDownIcon style={iconStyles} />;
};
