# Turbopandarepo

## Turborepo Design System starter with Changesets

This is a React design system based on the official starter powered by
Turborepo.

Versioning and package publishing is handled by
[Changesets](https://github.com/changesets/changesets) and fully automated with
GitHub Actions.

## What's inside?

This Turborepo includes the following:

### Apps and Packages

- `@turbopandarepo/docs`: A placeholder documentation site powered by
  [Next.js](https://nextjs.org/)
- `@turbopandarepo/ui`: UI React components
- `@turbopandarepo/utils`: shared React utilities
- `@turbopandarepo/tsconfig`: shared `tsconfig.json`s used throughout the
  monorepo
- `@turbopandarepo/eslint-config`: ESLint preset using **Flat Config**

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting using new
  [Flat Config](https://eslint.org/blog/2022/08/new-config-system-part-2/)
- [Prettier](https://prettier.io) for code formatting

### Useful commands

- `pnpm build` - Build all packages and the docs site
- `pnpm dev` - Develop all packages and the docs site
- `pnpm lint` - Lint all packages
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each
  package's clean script)
- `pnpm reinstall` - Clean and reinstall packages
- `pnpm reinstall:lint` - Reinstall and lint shortcut
- `pnpm reinstall:dev` - Reinstall and dev shortcut
- `pnpm format` - Use Prettier to format .ts, .tsx and .nd files
- `pnpm changeset` - Generate a changeset
- `pnpm version-packages` - Generate a changeset and bump all packages
- `pnpm release` - Build docs and publish packages to npm

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
