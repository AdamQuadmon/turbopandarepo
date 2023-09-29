"use client";
import { HStack, type HstackProps } from "@turbopandarepo/ds/jsx";
import { ChevronRightIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

import { Icon, Typography } from "../ui";

type BreadcrumbsProps = HstackProps;

export const Breadcrumbs = (props: BreadcrumbsProps) => {
	const pathName = usePathname();
	const crumbs = pathName
		.split("/")
		.filter(Boolean)
		.filter((path) => !["docs"].includes(path))
		.map((path) => path.replace(/-/g, " "));
	return (
		<HStack gap="1" {...props}>
			{crumbs.map((crumb, index, arr) => (
				<Fragment key={index}>
					<Typography
						_last={{ color: "fg.emphasized" }}
						as="span"
						color="fg.subtle"
						fontWeight="medium"
						textStyle="sm"
						textTransform="capitalize"
					>
						{crumb}
					</Typography>
					{arr.length - 1 !== index && (
						<Icon alignSelf="center" color="fg.subtle" size="sm">
							<ChevronRightIcon />
						</Icon>
					)}
				</Fragment>
			))}
		</HStack>
	);
};
