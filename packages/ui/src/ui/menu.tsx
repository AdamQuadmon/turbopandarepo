import * as Ark from "@ark-ui/react/menu";
import { styled } from "@turbopandarepo/ds/jsx";
import { type MenuVariantProps, menu } from "@turbopandarepo/ds/recipes";

import { createStyleContext } from "../lib/create-style-context";

const { withContext, withProvider } = createStyleContext(menu);

export type MenuProps = Ark.MenuProps & MenuVariantProps;

const MenuRoot = withProvider(styled(Ark.Menu.Root));
export const MenuArrow = withContext(styled(Ark.Menu.Arrow), "arrow");
export const MenuArrowTip = withContext(styled(Ark.Menu.ArrowTip), "arrowTip");
export const MenuContent = withContext(styled(Ark.Menu.Content), "content");
export const MenuContextTrigger = withContext(
	styled(Ark.Menu.ContextTrigger),
	"contextTrigger",
);
export const MenuItem = withContext(styled(Ark.Menu.Item), "item");
export const MenuItemGroup = withContext(
	styled(Ark.Menu.ItemGroup),
	"itemGroup",
);
export const MenuItemGroupLabel = withContext(
	styled(Ark.Menu.ItemGroupLabel),
	"itemGroupLabel",
);
export const MenuOptionItem = withContext(
	styled(Ark.Menu.OptionItem),
	"optionItem",
);
export const MenuPositioner = withContext(
	styled(Ark.Menu.Positioner),
	"positioner",
);
export const MenuSeparator = withContext(
	styled(Ark.Menu.Separator),
	"separator",
);
export const MenuTrigger = withContext(styled(Ark.Menu.Trigger), "trigger");
export const MenuTriggerItem = withContext(
	styled(Ark.Menu.TriggerItem),
	"triggerItem",
);

export const Menu = Object.assign(MenuRoot, {
	Arrow: MenuArrow,
	ArrowTip: MenuArrowTip,
	Content: MenuContent,
	ContextTrigger: MenuContextTrigger,
	Item: MenuItem,
	ItemGroup: MenuItemGroup,
	ItemGroupLabel: MenuItemGroupLabel,
	OptionItem: MenuOptionItem,
	Positioner: MenuPositioner,
	Root: MenuRoot,
	Separator: MenuSeparator,
	Trigger: MenuTrigger,
	TriggerItem: MenuTriggerItem,
});
