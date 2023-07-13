# Turbopandarepo

## PandaCSS UI & Design System with Storybook on NextJs

This is a 🐼 [PandaCSS](https://panda-docs.vercel.app/) powered React design
system based on the official
[Turborepo](https://turbo.build/repo/docs/getting-started/create-new) starter.

### HighLights

- Ui components package with **PandaCSS** (TODO: add
  [Ark-UI](https://ark-ui.com/) & [Zag](https://zagjs.com/))
- PandaCSS preset package (TODO: fix recipes)
- [Next.js](https://nextjs.org/) based [Storybook](https://storybook.js.org/)
- **ESLint** new
  [Flat Config](https://eslint.org/blog/2022/08/new-config-system-part-2/) with
  configs and rules
- **rimraf** for cross platform `rm -rf` functionality

Versioning and package publishing is handled by
[Changesets](https://github.com/changesets/changesets) and fully automated with
GitHub Actions.

## What's inside?

This Turborepo includes the following:

### Apps and Packages

- `@turbopandarepo/docs`: A Storybook documentation site powered by Next.js
- `@turbopandarepo/eslint-config`: ESLint preset using **Flat Config**
- `@turbopandarepo/preset`: PandaCSS custom preset
- `@turbopandarepo/tsconfig`: Shared `tsconfig.json`s used throughout the
  monorepo
- `@turbopandarepo/ui`: Shared React UI components
- `@turbopandarepo/utils`: Shared React utilities

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Useful commands

- `pnpm build` - Build all packages and the docs site
- `pnpm dev` - Develop all packages and the docs site
- `pnpm lint` - Lint all packages
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each
  package's clean script)
- `pnpm reinstall` - Clean and reinstall packages
- `pnpm reinstall:lint` - Reinstall and lint shortcut
- `pnpm reinstall:dev` - Reinstall and dev shortcut
- `pnpm storybook:dev` - Develop Storybook for all packages
- `pnpm storybook:build` - Build Storybook for all packages
- `pnpm storybook:move` - Move the built Storybooks to root
- `pnpm storybook:vercel` - Vercel build command for Storybook
- `pnpm format` - Use Prettier to format .ts, .tsx and .nd files
- `pnpm changeset` - Generate a changeset
- `pnpm version-packages` - Generate a changeset and bump all packages
- `pnpm release` - Build docs and publish packages to npm

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting using new
  [Flat Config](https://eslint.org/blog/2022/08/new-config-system-part-2/)
- [Prettier](https://prettier.io) for code formatting

## Storybook

This implementation is ready for
[compose turborepo's Storybooks](https://medium.com/@Seb_L/compose-your-turborepos-storybooks-and-deploy-them-to-vercel-94befbb78a56)
using the
[Storybook Composition](https://storybook.js.org/docs/react/sharing/storybook-composition)
feature.

You can use `pnpm storybook:dev --filter=docs` to run a single Storybook (docs
one in this example).

Right now no other package has a Storybook to Compose as our UI and preset are
build inside our docs app. But we are ready to compose a future website
Storybook for example or a UI one if we want to build and release the UI package
alone.

## Storybook Issues

This implementation has still some issues:

- [ ] **changes** in package **recipes** are not reflected in Storybook until
      restart as `config:change` is not triggered
- [ ] **only declared styles** are available in Storybook (check warning
      variant, uncomment warning button on page.tsx to see how Storybook
      refreshes including the missing styles)
- [ ] **\_hover** condition style in base button is **not inherited** by
      variants (maybe not a bug)
- [ ] missing a **Control field transformer** for **ConditionalValue** (see
      Button.stories.tsx variant and size example)

### Workarounds

- develop recipes using **CVA** then move to preset package
- explicitly **declare all variants** in the story

## Versioning and Publishing packages

Package publishing has been configured using
[Changesets](https://github.com/changesets/changesets). Please review their
[documentation](https://github.com/changesets/changesets#documentation) to
familiarize yourself with the workflow.

This example comes with automated npm releases setup in a
[GitHub Action](https://github.com/changesets/action). To get this working, you
will need to create an `NPM_TOKEN` and `GITHUB_TOKEN` in your repository
settings. You should also install the
[Changesets bot](https://github.com/apps/changeset-bot) on your GitHub
repository as well.

For more information about this automation, refer to the official
[changesets documentation](https://github.com/changesets/changesets/blob/main/docs/automating-changesets.md)

### npm

If you want to publish package to the public npm registry and make them publicly
available, this is already setup.

To publish packages to a private npm organization scope, **remove** the
following from each of the `package.json`'s

```diff
- "publishConfig": {
-  "access": "public"
- },
```

### GitHub Package Registry

See
[Working with the npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#publishing-a-package-using-publishconfig-in-the-packagejson-file)
