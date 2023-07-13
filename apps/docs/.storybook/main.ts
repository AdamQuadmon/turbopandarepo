import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
  refs: {
    // web: {
    //   title: "Web",
    //   url:
    //     process.env.NODE_ENV === "development"
    //       ? "http://localhost:6007/"
    //       : "web/",
    // },
    // ui: {
    //   title: "Ui",
    //   url:
    //     process.env.NODE_ENV === "development"
    //       ? "http://localhost:6008/"
    //       : "ui/",
    // },
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  features: {
    storyStoreV7: true,
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
