import * as Ark from "@ark-ui/react/dialog";
import { styled } from "@turbopandarepo/ds/jsx";
import { type DialogVariantProps, dialog } from "@turbopandarepo/ds/recipes";

import { createStyleContext } from "../lib/create-style-context";

const { withContext, withProvider } = createStyleContext(dialog);

export type DialogProps = Ark.DialogProps & DialogVariantProps;

const DialogRoot = withProvider(styled(Ark.Dialog.Root));
export const DialogBackdrop = withContext(
	styled(Ark.Dialog.Backdrop),
	"backdrop",
);
export const DialogCloseTrigger = withContext(
	styled(Ark.Dialog.CloseTrigger),
	"closeTrigger",
);
export const DialogContainer = withContext(
	styled(Ark.Dialog.Container),
	"container",
);
export const DialogContent = withContext(styled(Ark.Dialog.Content), "content");
export const DialogDescription = withContext(
	styled(Ark.Dialog.Description),
	"description",
);
export const DialogTitle = withContext(styled(Ark.Dialog.Title), "title");
export const DialogTrigger = withContext(styled(Ark.Dialog.Trigger), "trigger");

export const Dialog = Object.assign(DialogRoot, {
	Backdrop: DialogBackdrop,
	CloseTrigger: DialogCloseTrigger,
	Container: DialogContainer,
	Content: DialogContent,
	Description: DialogDescription,
	Root: DialogRoot,
	Title: DialogTitle,
	Trigger: DialogTrigger,
});
