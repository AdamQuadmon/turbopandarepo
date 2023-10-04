import { SiGithub, SiTwitter } from "@icons-pack/react-simple-icons";
import { Badge } from "@turbopandarepo/ui";
import NextLink from "next/link";
export const navMain = [
	{
		label: "About",
		path: "/",
	},
	{
		label: "Services",
		path: "/",
	},
	{
		label: "Prices",
		path: "/",
	},
];
export const navSocials = [
	{
		icon: <SiGithub />,
		label: "github",
		path: "/",
	},
	{
		icon: <SiTwitter />,
		label: "twitter",
		path: "/",
	},
];

export const navFooter = [
	{
		label: "Home",
		path: "/",
	},
	{
		label: "Gallery",
		path: "/gallery",
	},
	{
		label: "Users",
		path: "/users",
	},
	{
		label: "Explore",
		path: "/explore",
	},
];

export const navSide = [
	{
		entries: [
			{
				Link: (
					<NextLink href="/docs/overview/introduction">
						{"Introduction"}
					</NextLink>
				),
				description:
					"Welcome to Turbopandarepo, your source for Panda CSS on Turborepo.",
				href: "/docs/overview/introduction",
			},
			{
				Link: (
					<NextLink href="/docs/overview/getting-started">
						{"Getting Started"}
						<Badge size="sm">new</Badge>
					</NextLink>
				),
				description: "A Step-by-step Guide to Using Turbopandarepo",
				href: "/docs/overview/getting-started",
			},
		],
		name: "Overview",
	},
	{
		entries: [
			{
				Link: (
					<NextLink href="/docs/overview/getting-started">
						{"Semantic Tokens"}
						<Badge size="sm">new</Badge>
					</NextLink>
				),
				description:
					"These tokens give elements a specific meaning, making it easier for users to understand what each part of the interface does.",
				href: "/docs/foundations/semantic-tokens",
			},
			{
				Link: (
					<NextLink href="/docs/foundations/text-styles">
						{"Text Styles"}
					</NextLink>
				),
				description:
					"Explore different text styles to incorporate in your designs.",
				href: "/docs/foundations/text-styles",
			},
		],
		name: "Foundations",
	},
];
