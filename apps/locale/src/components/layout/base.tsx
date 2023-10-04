import type { PropsWithChildren } from "react";

import { Container } from "@turbopandarepo/ds/jsx";
import { Footer, NavbarAdvanced } from "@turbopandarepo/ui";

// TODO make Layout Recipe
export const BaseLayout = ({ children }: PropsWithChildren) => {
	return (
		<Container>
			<NavbarAdvanced />
			<Container id="skip">{children}</Container>
			<Footer />
		</Container>
	);
};
