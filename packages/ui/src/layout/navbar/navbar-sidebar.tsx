"use client";

import { Stack } from "@turbopandarepo/ds/jsx";
import {
	type PropsWithChildren,
	type ReactElement,
	useEffect,
	useState,
} from "react";

import { Typography } from "../../ui";
import {
	Segment,
	SegmentControl,
	SegmentGroup,
	SegmentGroupIndicator,
	SegmentLabel,
} from "../../ui/segment-group";

export interface SidebarProps extends PropsWithChildren {
	pathname: string;
	sitemap: SitemapGroup[];
}

interface SitemapEntry {
	Link: ReactElement;
	href: string;
}

export interface SitemapGroup {
	entries: SitemapEntry[];
	name: string;
}

export const NavbarSidebar = ({
	children,
	pathname,
	sitemap,
}: SidebarProps): ReactElement => {
	const [currentPath, setCurrentPath] = useState(pathname);

	useEffect(() => {
		setCurrentPath(pathname);
	}, [pathname]);

	return (
		<Stack alignItems="stretch" gap="8">
			{children}
			{sitemap.map((group) => (
				<Stack gap="3" key={group.name}>
					<Typography
						fontWeight="semibold"
						textStyle={{ base: "md", md: "sm" }}
					>
						{group.name}
					</Typography>
					<SegmentGroup
						orientation="vertical"
						size={{ base: "md", md: "sm" }}
						value={currentPath}
					>
						{group.entries.map((option, id) => (
							<Segment data-orientation="vertical" key={id} value={option.href}>
								<SegmentControl />
								<SegmentLabel display="inline-flex" gap="2">
									{option.Link}
								</SegmentLabel>
							</Segment>
						))}
						<SegmentGroupIndicator
							hidden={
								!group.entries.some((entry) => entry.href === currentPath)
							}
						/>
					</SegmentGroup>
				</Stack>
			))}
		</Stack>
	);
};
