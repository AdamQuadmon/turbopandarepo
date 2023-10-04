# Work In Progress

## Milestones

- setup base production ready website

  - i18n
  - supabase
    - user admin
    - content admin
      - topics
      - web pages
      - blog posts
      - photo
    - user gallery
      - albums
      - tags
      - filter
    - payment system
      - checkout
      - subscription
    - e-commerce
    - marketplace
  - contentLayer
  - stripe

- document Panda stuff with Storybook

## Todo

### UX

- id="skip" to skip to content

## Things to check

- add files to perfectionist ignore (generators/config, recipes, and others)
- check why Park-Ui uses zustand instead of zag
- check tree shaking of ui elements and presets
- check createStyleContext Typescript issues

## Bugs

- ColorModeScript server component issues
- Warnings on deprecated modules
  <https://github.com/storybookjs/storybook/issues/24070>
- Knip postcss.config.cjs is detected as unused
  <https://github.com/webpro/knip/issues/256>
- rimraf: removed "postinstall add rimraf" action seems to cause issues with
  reinstall action, maybe we should remove rimraf deps from packages to only
  rely on global installed one

## Specific issues

### NextJs

- check postcss.config.cjs extend for panda
  - <https://turbo.build/pack/docs/features/css#tailwind-css>
  - <https://panda-css.com/docs/installation/nextjs#install-panda-css>
  - <https://nextjs.org/docs/pages/building-your-application/configuring/post-css#customizing-plugins>

### ESLint, Prettier, Typescript Issues

Recheck docs, try implement next lint:

- <https://nextjs.org/docs/app/building-your-application/configuring/eslint>
- <https://turbo.build/repo/docs/handbook/linting/eslint>

- packages/tsconfig is not linted
- check prettier-plugin-organize-attributes
- check eslint entrypoint "." vs "src/\*_/_.ts\*"
- check markdown line length, it's disabled by markdownlint/style/prettier, but
  it's disabled also in prettier, I had to add proseWrap: always

### Storybook Issues

- check if storybook issues are still there
- currently there is no Story of a recipe
- reduce autodoc generated attributes

This implementation has still some issues:

- [ ] **changes** in package **recipes** are not reflected in Storybook until
      restart, even if `config:change` is triggered by touching panda.config, it
      still reads the old config until storybook restart
- [ ] **only declared styles** are available in Storybook maybe this can help
      [Static CSS Generator: Recipes](https://panda-css.com/docs/guides/static#generating-recipes)

### PandaCSS Issues

- how to extend a recipe?
- how to not duplicate panda.config in docs and ui (at least for presets)?
- how to fix Custom Compound Components Slot Recipe?
