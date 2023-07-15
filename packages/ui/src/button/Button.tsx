import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { button } from "@turbopandarepo/ds/recipes";
import type { ButtonVariantProps } from "@turbopandarepo/ds/recipes";

// Props type in ButtonVariantProps is ConditionalValue.
// Conditions are _hover, _active, _focus, _disabled etc.
//
// Without specifying the values of the property,
// Storybook Control will be an object, not a checkbox list,
// and Description will show:
//
// ConditionalValue<"sm" | "md" | "lg">
//
// TODO: provide a ConditionalValue Control for Storybook.
export interface ButtonProps
  extends ButtonVariantProps,
    PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  // variant?: "main" | "primary" | "instagram" | "warning" | "secondary";
  // size: "sm" | "md" | "lg";
  label?: string;
}

export const Button = ({
  variant = "main",
  size = "md",
  label,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button type="button" className={button({ variant, size })} {...props}>
      {label}
      {children}
    </button>
  );
};

export default Button;
