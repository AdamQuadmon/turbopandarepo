import type { RecipeConfig } from "@pandacss/types";

const defineRecipe = <T extends RecipeConfig>(config: T) => config;

export const pageRecipe = defineRecipe({
  name: "page",
  jsx: ["Page"],
  base: {
    ".storybook-page": {
      fontFamily:
        "'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
      fontSize: "md",
      lineHeight: "lg",
      padding: "lg",
      margin: "0 auto",
      maxWidth: "600px",
      color: "stone.900",
    },

    ".storybook-page h2": {
      fontWeight: "bold",
      fontSize: "lg",
      lineHeight: 1,
      margin: "0 0 4px",
      display: "inline-block",
      verticalAlign: "top",
    },

    ".storybook-page p": {
      m: "1em 0",
    },

    ".storybook-page a": {
      textDecoration: "none",
      color: "#1ea7fd",
    },

    ".storybook-page ul": {
      pl: "30px",
      margin: "1em 0",
    },

    ".storybook-page li": {
      mb: "sm",
    },

    ".storybook-page .tip": {
      display: "inline-block",
      borderRadius: "1em",
      fontSize: "11px",
      lineHeight: "12px",
      fontWeight: "bold",
      background: "#e7fdd8",
      color: "#66bf3c",
      padding: "4px 12px",
      mr: "10px",
      verticalAlign: "top",
    },

    ".storybook-page .tip-wrapper": {
      fontSize: "13px",
      lineHeight: "20px",
      mt: "40px",
      mb: "40px",
    },

    ".storybook-page .tip-wrapper svg": {
      display: "inline-block",
      height: "12px",
      width: "12px",
      mr: "4px",
      verticalAlign: "top",
      mt: "3px",
    },

    ".storybook-page .tip-wrapper svg path": {
      fill: "#1ea7fd",
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
