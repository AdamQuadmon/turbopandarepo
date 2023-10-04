import { HStack, type HstackProps } from "@turbopandarepo/ds/jsx";
import { ChevronRightIcon } from "lucide-react";
import { Fragment } from "react";

import { Icon, Typography } from "../ui";

interface BreadcrumbsProps extends HstackProps {
	pathname: string;
}

export const Breadcrumbs = ({ pathname, ...props }: BreadcrumbsProps) => {
	const crumbs = pathname
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
