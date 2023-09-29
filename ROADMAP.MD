# Work In Progress

## Milestones

- document Panda stuff with Storybook

## Todo

- check presets changes in storybook
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
- rimraf: removed postinstall add rimraf action seems to cause issues with
  reinstall action, maybe we should remove rimraf deps from packages to only
  rely on global installed one

### Recheck bugs

- check eslint issues with plop

## Specific issues

### NextJs

- check postcss.config.cjs extend for panda
  <https://turbo.build/pack/docs/features/css#tailwind-css>
  <https://panda-css.com/docs/installation/nextjs#install-panda-css>
  <https://nextjs.org/docs/pages/building-your-application/configuring/post-css#customizing-plugins>

### ESLint Issues

Recheck docs, try implement next lint
<https://nextjs.org/docs/app/building-your-application/configuring/eslint>
<https://turbo.build/repo/docs/handbook/linting/eslint>

- package/tsconfig is not linted
- check eslint entrypoint "." vs "src/\*_/_.ts\*"
- check markdown line length, it's disabled by markdownlint/style/prettier, but
  it's disabled also in prettier, I had to add proseWrap: always

### Storybook Issues

- check if storybook issues are still there
- reduce autodoc generated attributes

This implementation has still some issues:

- [ ] **changes** in package **recipes** are not reflected in Storybook until
      restart, even if `config:change` is triggered by touching panda.config, it
      still reads the old config until storybook restart
- [ ] **only declared styles** are available in Storybook maybe this can help
      [Static CSS Generator: Recipes](https://panda-css.com/docs/guides/static#generating-recipes)
- [ ] **\_hover** condition style in base button is **not inherited** by
      variants (maybe not a bug)
- [ ] missing a **Control field transformer** for **ConditionalValue** (see
      Button.stories.tsx variant and size example)

### PandaCSS Issues

- how to not duplicate panda.config in docs and ui (at least for presets)?
