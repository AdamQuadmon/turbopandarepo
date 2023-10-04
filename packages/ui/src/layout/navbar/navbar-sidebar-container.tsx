"use client";

import { Portal } from "@ark-ui/react";
import { Stack } from "@turbopandarepo/ds/jsx";
import { MenuIcon, XIcon } from "lucide-react";
import { type PropsWithChildren, type ReactElement, useEffect } from "react";

import { IconButton } from "../../ui";
import {
	Drawer,
	DrawerBackdrop,
	DrawerCloseTrigger,
	DrawerContainer,
	DrawerContent,
	DrawerTrigger,
} from "../../ui/drawer";

interface NavbarSidebarContainerProps extends PropsWithChildren {
	pathname: string;
}

export const NavbarSidebarContainer = ({
	children,
	pathname,
}: NavbarSidebarContainerProps): ReactElement => {
	// https://ark-ui.com/docs/components/dialog#using-render-function
	return (
		<Drawer placement="left">
			{({ close }: { close: () => void }) => (
				<>
					<DrawerTrigger asChild>
						<IconButton aria-label="Open Menu" size="sm" variant="ghost">
							<MenuIcon />
						</IconButton>
					</DrawerTrigger>
					<RouteChangeHandler close={close} pathname={pathname} />
					<Portal>
						<DrawerBackdrop />
						<DrawerContainer>
							<DrawerContent>
								<Stack align="start" gap="8" mt="-0.5">
									{children}
								</Stack>
								<DrawerCloseTrigger
									asChild
									position="absolute"
									right="4"
									top="3"
								>
									<IconButton aria-label="Close Sidebar" variant="ghost">
										<XIcon />
									</IconButton>
								</DrawerCloseTrigger>
							</DrawerContent>
						</DrawerContainer>
					</Portal>
				</>
			)}
		</Drawer>
	);
};

interface RouteChangeHandlerProps {
	close: () => void;
	pathname: string;
}

const RouteChangeHandler = ({ close, pathname }: RouteChangeHandlerProps) => {
	useEffect(() => {
		close();
	}, [pathname]);
	return null;
};
