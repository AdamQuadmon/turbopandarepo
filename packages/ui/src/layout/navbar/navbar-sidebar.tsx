"use client";
import { Stack } from "@turbopandarepo/ds/jsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import {
	type PropsWithChildren,
	type ReactElement,
	useEffect,
	useState,
} from "react";

import { Badge, Typography } from "../../ui";
import {
	Segment,
	SegmentControl,
	SegmentGroup,
	SegmentGroupIndicator,
	SegmentLabel,
} from "../../ui/segment-group";

interface SitemapEntry {
	href: string;
	label?: string;
	title: string;
}
export interface SitemapGroup {
	entries: SitemapEntry[];
	name: string;
}
export interface SidebarProps extends PropsWithChildren {
	sitemap: SitemapGroup[];
}

export const NavbarSidebar = ({
	children,
	sitemap,
}: SidebarProps): ReactElement => {
	const pathname = usePathname();
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
							<Segment
								asChild
								data-orientation="vertical"
								key={id}
								value={option.href}
							>
								<NextLink href={option.href}>
									<SegmentControl />
									<SegmentLabel display="inline-flex" gap="2">
										{option.title}{" "}
										{option.label && <Badge size="sm">{option.label}</Badge>}
									</SegmentLabel>
								</NextLink>
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
