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
- [JoshuaKGoldberg/create-typescript-app](https://github.com/JoshuaKGoldberg/create-typescript-app)
  for ESLint and TypeScript integration (waiting for Flat Config to become
  stable)
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

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Useful commands

- `pnpm build` - Build all packages and the docs site
- `pnpm clean` - Clean up all `node_modules` and `dist` folders
- `pnpm reinstall` - Clean and reinstall packages
- `pnpm dev` - Develop all packages and the docs site
- `pnpm storybook:dev` - Develop Storybook
- `pnpm storybook:build` - Build Storybook
- `pnpm storybook:move` - Move the built Storybooks to root
- `pnpm storybook:vercel` - Vercel build command for Storybook
- `pnpm lint` - Lint all packages
- `pnpm lint:knip` - Lint unused code
- `pnpm lint:md` - Lint Markdown files
- `pnpm lint:package-json` - Lint package.json
- `pnpm lint:packages` - Check if newer dependencies can be used in lockfile.
- `pnpm lint:spelling` - Lint spelling
- `pnpm format` - Use Prettier to format .ts, .tsx and .nd files
- `pnpm format:write` - Write Prettier changes
- `pnpm changeset` - Generate a changeset
- `pnpm version-packages` - Generate a changeset and bump all packages
- `pnpm release` - Build docs and publish packages to npm

### Other commands

- `pnpm up -L -r -i` - to interactively and recursively update dependencies to
  latest versions
- `pnpm add react --filter web` - to add a package to a specific workspace

#### notes on adding a packages

Running `pnpm add <pkg>`, if a `"prepare": "panda codegen"` fails, the package
will not be added to package.json unless `--ignore-scripts` flag is provided

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting using new
  [Flat Config](https://eslint.org/blog/2022/08/new-config-system-part-2/)
- [Prettier](https://prettier.io) for code formatting
- [cSpell](https://github.com/streetsidesoftware/cspell) for linting spelling
- [Knip](https://github.com/webpro/knip) for unused code
- [Markdownlint](https://github.com/DavidAnson/markdownlint) for linting
  markdown
- [Npm-package-json-lint](https://github.com/tclindner/npm-package-json-lint)
  for linting package.json

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

## Generators

Turborepo uses a simplified [Plop](https://plopjs.com/documentation/)
configuration.

Learn more about Turborepo Generators at
[turbo: code-generation](https://turbo.build/repo/docs/core-concepts/monorepos/code-generation)
Check also
[blog post generator](https://github.com/vercel/turbo/tree/main/docs/turbo/generators)

### Generate Component

A `pnpm gen:component` command is available to generate a new component from the
root. It will generate:

- a `ComponentName` folder for the new component in the **ui** package with
  component and index files
- an entry in the index.ts file of the **ui** package
- a `ComponentName.stories.tsx` file in the **docs** package
- a `component.recipe` file in the **preset** package

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
