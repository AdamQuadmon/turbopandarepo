import { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { button } from "@turbopandarepo/ds/recipes";
import type { ButtonVariantProps } from "@turbopandarepo/ds/recipes";

export interface ButtonProps
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
  extends ButtonVariantProps,
    PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  // uncomment to see how Storybook Control will change
  variant?: "primary" | "instagram" | "warning" | "secondary";
  /**
   * How large should the button be?
   */
  // uncomment to see how Storybook Control will change
  // size: "sm" | "md" | "lg";
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  variant = "secondary",
  size = "md",
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
