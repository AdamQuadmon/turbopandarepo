"use client";

import type { ComponentPropsWithoutRef } from "react";

import { ark } from "@ark-ui/react";
import { styled } from "@turbopandarepo/ds/jsx";
import { type HTMLStyledProps } from "@turbopandarepo/ds/jsx";
import { type ButtonVariantProps, button } from "@turbopandarepo/ds/recipes";

export type ButtonProps = HTMLStyledProps<"button"> &
	ButtonVariantProps &
	ComponentPropsWithoutRef<typeof ark.button> & {
		label?: string;
	};

export const Button = ({ children, label, name, onClick }: ButtonProps) => {
	const Comp = styled(ark.button, button);
	return (
		<Comp name={name} onClick={onClick}>
			{label}
			{children}
		</Comp>
	);
};

export type IconButtonProps = ButtonProps & {
	"aria-label": string;
};

export const IconButton = (props: IconButtonProps) => {
	return <Button px="0" {...props} />;
};
