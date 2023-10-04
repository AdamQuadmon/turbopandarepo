"use client";
import type { PropsWithChildren, ReactElement, ReactNode } from "react";

import { type StackProperties } from "@turbopandarepo/ds/patterns";

import { Footer } from ".";

export const FooterAdvanced = ({
	direction,
	hasCenteredLogo,
	logo,
	navMain,
}: FooterAdvancedProps) => {
	return (
		<Footer>
			<Footer.Header data-orientation={direction}>
				<Footer.Left>
					{!hasCenteredLogo && logo}
					{navMain && <Footer.NavMain>{navMain}</Footer.NavMain>}
				</Footer.Left>
				<Footer.Center>{hasCenteredLogo && logo}</Footer.Center>
				<Footer.Right></Footer.Right>
			</Footer.Header>
		</Footer>
	);
};

/**
 *
 * # Logo
 *
 * If the header is `sticking` to the top of the page,
 * try not show the Logo in the footer too.
 * Same things for `Nav` links.
 *
 * - A Small Logo can be shown centered between the two rows.
 * - A bigger Logo can be shown on the left of the first row
 * (especially for Local Business and Brand Awareness).
 *
 * It should be different from header logo, maybe bigger and with a tag line.
 *
 * # Tag Line
 *
 * An inspirational tag line can be shown scrolling to much revealing
 * itself between fat row and lsat narrow row.
 *
 * # CTA and Diagonals
 *
 * CTAs can be repeated 'top-left', 'center' and 'bottom-right'
 * resulting in an interesting diagonal.
 * Consider using three different and progressive CTAs for each position.
 *
 * CTA can be Newsletter/Signin and Socials.
 *
 * # Contact Info
 *
 * For a Local Business CTA can be a phone number and a map.
 * In this case you can try also a Logos diagonal.
 *
 * # Direction
 *
 * The footer can be a `vertical` or `horizontal` Stack.
 *
 * # Rows
 *
 * 1) First row be two sides: CTA and socials on left, Nav links on right.
 *
 * 2) Second row can contain Highlighted links or Legals and other technical links.
 *
 * 3) A third row can contain a Disclaimer or the Cookie stuff.
 *
 * # Columns
 *
 * Prefer narrow and single column row alternating a fat row.
 * Prefer only one fat row.
 *
 * 1) a single central CTA can span all row
 * 2) a CTA on the left and Nav links on the right.
 * 3) a Local Business on the left, a Nav links on the center and a CTA on right.
 * 4) 4 Nav Links columns or 3 Nav Links columns and a CTA column.
 * 5) 4 Nav Links columns and a CTA column.
 *
 * # Back to top
 *
 * Bottom right can contain a back to top button.
 *
 * # Responsive
 *
 * At `SM` Level:
 *
 * The footer can be a sticky bar at the bottom of the screen.
 * The Header should not be sticky.
 * You can try alternated sticky header and footer based on scroll directions.
 * A central CTA and a right menu button can be enough for the content
 *
 */

export type FooterPositions = "center" | "left" | "right";

// TODO implement functionalities from types
export interface FooterAdvancedProps extends PropsWithChildren {
	address?: string | string[];
	className?: string;
	copyRight?: {
		description: string;
		label: string;
		position: FooterPosition;
		title: string;
	};
	cta?: FooterBlock | FooterBlock[];
	direction?: StackProperties["direction"];
	directionsLink?: string;
	hasCenteredLogo?: boolean;

	logo?: ReactElement;
	logoAlign?: "center" | "end" | "start";

	logoRow?: "endRow" | "startRow";

	mapLink?: string;
	navMain?: ReactNode;
	newsLetter?: {
		description: string;
		label: string;
		position: FooterPosition;
		title: string;
	};
	phone?: string | string[];

	privacyPolicy?: {
		description: string;
		label: string;
		position: FooterPosition;
		title: string;
	};
	rows?: GridPlaceholdersLiteral;

	socialFeedsPosition?: FooterPosition;

	socialsPosition?: FooterPosition;
	tagLine?: string;
	termsOfUse?: {
		description: string;
		label: string;
		position: FooterPosition;
		title: string;
	};
}

type FooterPosition = "bottom" | "end" | "start" | "top";

type GridPlaceholdersLiteral = "1" | "2" | "3";

interface FooterBlock {
	description: string;
	label: string;
	position: FooterPosition;
	title: string;
}
