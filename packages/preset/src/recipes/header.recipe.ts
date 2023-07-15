import type { RecipeConfig } from "@pandacss/types";

const defineRecipe = <T extends RecipeConfig>(config: T) => config;

export const headerRecipe = defineRecipe({
  name: "header",
  jsx: ["Header"],
  base: {
    ".storybook-header": {
      fontFamily:
        "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
      padding: "md",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    ".storybook-header svg": {
      display: "inline-block",
      verticalAlign: "top",
    },

    ".storybook-header h1": {
      fontWeight: 700,
      fontSize: "md",
      lineHeight: 1,
      margin: "6px 0 6px 10px",
      display: "inline-block",
      verticalAlign: "top",
    },

    ".storybook-header button + button": {
      ml: "md",
    },

    ".storybook-header .welcome": {
      color: "#333",
      fontSize: "md",
      mr: "md",
    },

    _hover: {},
  },
  compoundVariants: [],
  variants: {
    variant: {
      main: {},
    },
    size: {
      md: {},
    },
  },
});
