import type { PropsWithChildren } from "react";

import { Container } from "@turbopandarepo/ds/jsx";

import { BaseLayout } from "~/components/layout";

export interface PageLayoutProps extends PropsWithChildren {
	title: string;
}

// TODO make PageLayout Recipe
export const PageLayout = ({ children, title }: PageLayoutProps) => {
	return (
		<BaseLayout>
			<Container>{title}</Container>
			<Container>{children}</Container>
		</BaseLayout>
	);
};
