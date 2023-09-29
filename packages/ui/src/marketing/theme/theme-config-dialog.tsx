import { Portal } from "@ark-ui/react";
import { Box, Flex, Stack } from "@turbopandarepo/ds/jsx";
import { XIcon } from "lucide-react";

import { useThemeGenerator } from "../../lib/use-theme-generator";
import { IconButton } from "../../ui";
import {
	Dialog,
	DialogBackdrop,
	DialogCloseTrigger,
	DialogContainer,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "../../ui/dialog";
import { CopyCodeButton } from "./copy-code-button";

interface Props {
	onClose: () => void;
	open: boolean;
}

export const ThemeConfigDialog = (props: Props) => {
	const { themeConfig } = useThemeGenerator();

	return (
		<Dialog {...props}>
			<Portal>
				<DialogBackdrop />
				<DialogContainer>
					<DialogContent>
						<Stack gap="8" p="6">
							<Stack gap="1">
								<DialogTitle>Make it yours</DialogTitle>
								<DialogDescription>
									Copy and paste the following code into your Panda config.
								</DialogDescription>
							</Stack>
							<Box
								bg="bg.subtle"
								borderRadius="l2"
								borderWidth="1px"
								className="dark"
								position="relative"
							>
								<Box position="absolute" right="2" top="2" zIndex={1}>
									<CopyCodeButton content={themeConfig.config} />
								</Box>
								<Flex maxH="lg" minH="md" overflow="auto" p="4" width="lg">
									<Box
										dangerouslySetInnerHTML={{
											__html: themeConfig.code,
										}}
									/>
								</Flex>
							</Box>
						</Stack>
						<DialogCloseTrigger asChild position="absolute" right="2" top="2">
							<IconButton aria-label="Close Dialog" size="sm" variant="ghost">
								<XIcon />
							</IconButton>
						</DialogCloseTrigger>
					</DialogContent>
				</DialogContainer>
			</Portal>
		</Dialog>
	);
};
