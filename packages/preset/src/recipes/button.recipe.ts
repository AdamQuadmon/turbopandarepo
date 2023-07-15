import type { RecipeConfig } from "@pandacss/types";

const defineRecipe = <T extends RecipeConfig>(config: T) => config;

export const buttonRecipe = defineRecipe({
  name: "button",
  jsx: ["Button"],
  base: {
    fontFamily: "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontWeight: "700",
    cursor: "pointer",
    lineHeight: "1",
    borderRadius: "lg",
    _hover: { bg: "red.400" },
  },
  compoundVariants: [],
  variants: {
    variant: {
      main: { color: "stone.800", bg: "stone.50" },
      primary: { color: "stone.100", bg: "green.500" },
      instagram: { color: "stone.100", bg: "instagram" },
      warning: {
        color: "text.warning",
        bg: "background.warning",
        _hover: { bg: "background.warning.hovered" },
      },
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
