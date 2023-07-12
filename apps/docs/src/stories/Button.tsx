import { cva } from "../../styled-system/css";

interface ButtonProps {
  variant?: "primary" | "secondary";
  /**
   * How large should the button be?
   */
  size?: "sm" | "md" | "lg";
  /**
   * Button contents
   */
  label: string;
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
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={buttonRecipe({ variant, size })}
      {...props}
    >
      {label}
    </button>
  );
};

const buttonRecipe = cva({
  base: {
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: "700",
    cursor: "pointer",
    color: "stone.800",
    bg: "stone.50",
    lineHeight: "1",
    borderRadius: "lg",
    _hover: { bg: "red.400" },
  },
  variants: {
    variant: {
      primary: { color: "stone.100", bg: "blue.500" },
      secondary: {
        color: "stone.800",
        bg: "stone.100",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
      },
    },
    size: {
      sm: { padding: "2", fontSize: "sm" },
      md: { padding: "4", fontSize: "md" },
      lg: { padding: "6", fontSize: "lg" },
    },
  },
});
