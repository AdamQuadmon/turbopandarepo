"use client";

import { usePathname } from "next/navigation";
import { type PropsWithChildren, type ReactElement } from "react";

export type NavbarSidebarSwitchProps = PropsWithChildren;

export const NavbarSidebarSwitch = ({
	children,
}: NavbarSidebarSwitchProps): ReactElement => {
	const pathName = usePathname();

	const shouldRender = pathName !== "/no-sidebar";

	return <>{shouldRender && children}</>;
};
