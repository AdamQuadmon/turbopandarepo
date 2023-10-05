# Work In Progress

## Milestones

- [x] Turborepo
- [x] Linting Tools
- [x] Generators
- [x] NextJs13 appRouter
- [x] PandaCSS
- [x] ParkUi
- [x] Storybook
- [x] UI Components
- [x] UI Styles
- [ ] contentLayer
- [ ] SEO metadata
- [ ] PRODUCTION READY
- [ ] i18n
- [ ] supabase
  - [ ] user admin
  - [ ] content admin
    - topics
    - web pages
    - blog posts
    - photo
  - [ ] user gallery
    - albums
    - tags
    - filter
  - [ ] payment system
    - checkout
    - subscription
  - [ ] e-commerce
  - [ ] marketplace
- [ ] stripe
- [ ] document all Components with Storybook

## Things to check

- add files to perfectionist ignore (generators/config, recipes, and others) to
  prevent sorting fields
- check tree shaking of ui elements and presets
- check createStyleContext Typescript issues

## Bugs

- **Storybook**: Warnings on deprecated modules
  <https://github.com/storybookjs/storybook/issues/24070>
- **Knip**: postcss.config.cjs is detected as unused
  <https://github.com/webpro/knip/issues/256>
- **rimraf**: after removing "postinstall add rimraf" action, we are having
  issues with reinstall action, maybe we should remove rimraf deps from packages
  to only rely on global installed one
- **Contentlayer**:
  - [Warning] Contentlayer might not work as expected on Windows
    <https://github.com/contentlayerdev/contentlayer/issues/532>
  - .contentlayer needs to be cleaned before builds
    <https://github.com/contentlayerdev/contentlayer/issues/531>
  - ContentLayer seems to need useLiveReload(),
    <https://contentlayer.dev/docs/environments/nextjs-dcf8e39e#content-livereload-hmr>
    but it works without and with it, it gives an error

## Specific issues

### NextJs

- check postcss.config.cjs
  - <https://turbo.build/pack/docs/features/css#tailwind-css>
  - <https://panda-css.com/docs/installation/nextjs#install-panda-css>
  - <https://nextjs.org/docs/pages/building-your-application/configuring/post-css#customizing-plugins>

### ESLint, Prettier, Typescript Issues

Recheck docs, try implement `next lint`:

- <https://nextjs.org/docs/app/building-your-application/configuring/eslint>
- <https://turbo.build/repo/docs/handbook/linting/eslint>
- packages/tsconfig is not linted
- check prettier-plugin-organize-attributes
- check eslint entrypoint "." vs "src/\*_/_.ts\*"
- check markdown line length, it's disabled by markdownlint/style/prettier, but
  it's disabled also in prettier, I had to add proseWrap: always

### Storybook Issues

- check if storybook issues are still there (currently there is no Story of a
  recipe)
- reduce autodoc generated attributes (see panda docs)

This implementation can still have some issues:

- [ ] **changes** in package **recipes** are not reflected in Storybook until
      restart, even if `config:change` is triggered by touching panda.config, it
      still reads the old config until storybook restart
- [ ] **only declared styles** are available in Storybook. Maybe this can help
      [Static CSS Generator: Recipes](https://panda-css.com/docs/guides/static#generating-recipes)

### PandaCSS questions

- how to extend a recipe?
- how to not duplicate panda.config in docs and ui (at least for presets)?
- how to fix Custom Compound Components Slot Recipe?
