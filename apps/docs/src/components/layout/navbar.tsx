import {
	Breadcrumbs,
	NavbarCenter,
	NavbarHeader,
	NavbarLeft,
	NavbarNavMain,
	NavbarNavSocials,
	NavbarRight,
	NavbarSidebar,
	NavbarSidebarContainer,
	NavbarSidebarSwitch,
	Navbar as UiNavbar,
} from "@turbopandarepo/ui";

import { navMain, navSocials } from "~/navigation";
import { sitemap } from "~/sitemap";

import { UserActions } from "../actions/user";
import { Logo } from "../logo";

export const Navbar = () => {
	return (
		<UiNavbar>
			<NavbarHeader>
				<NavbarLeft>
					<NavbarSidebarSwitch>
						<Breadcrumbs />
						<NavbarSidebarContainer>
							<Logo />
							<NavbarSidebar sitemap={sitemap} />
						</NavbarSidebarContainer>
					</NavbarSidebarSwitch>
					<Logo />
					<NavbarNavMain links={navMain} />
				</NavbarLeft>
				<NavbarCenter />
				<NavbarRight>
					<UserActions />
					<NavbarNavSocials links={navSocials} />
				</NavbarRight>
			</NavbarHeader>
		</UiNavbar>
	);
};
