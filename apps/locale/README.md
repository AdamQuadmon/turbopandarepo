# Apps/Locale

Base locale app for web projects powered by NextJs and next-intl

For list of other features see `apps/docs`

## TODO

- implement ContentLayer
- implement SEO Metadata
- implement new NavbarAdvanced and FooterAdvanced
- add blog, news and other pages
- check NextIntlClientProvider for ClientContent and Error page
- check button-link, external-link
- check switcher, make it a simple 2 locales switch
  [see LocaleSwitcher](https://github.com/amannn/next-intl/blob/feat/next-13-rsc/examples/example-next-13-advanced/src/components/LocaleSwitcher.tsx)
- add multiple locale switcher

## Features

-

## i18n with next-intl

- [NextJs internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
  official guide
  - [next-intl](https://github.com/amannn/next-intl): the most complete solution
    - [next-intl/example-next-13-advanced](https://github.com/amannn/next-intl/tree/feat/next-13-rsc/examples/example-next-13-advanced)
    - [next-intl-3-0](https://next-intl-docs.vercel.app/blog/next-intl-3-0): we
      are using V3 which is in beta
    - [configuration](https://next-intl-docs-git-feat-next-13-rsc-next-intl.vercel.app/docs/usage/configuration)
      - see `i18n.ts`
      - hooks: `import {useLocale, useTimeZone, useMessages} from 'next-intl'`
    - [middleware](https://next-intl-docs-git-feat-next-13-rsc-next-intl.vercel.app/docs/routing/middleware)
      - see `middleware.tsx`
      - prefix and domain based routes
      - locale prefix
      - localizing pathnames
    - [error-files](https://next-intl-docs-git-feat-next-13-rsc-next-intl.vercel.app/docs/environments/error-files)
      - see `error.tsx` and `not-found.tsx`
      - check lazy loading of Error page
    - [navigation](https://next-intl-docs-git-feat-next-13-rsc-next-intl.vercel.app/docs/routing/navigation)
      - strategy: Localized pathnames
      - see `navigation.ts` which exposes API for
        - Link
        - getPathname
        - redirect
        - usePathname
        - useRouter
    - [server-client-components](https://next-intl-docs-git-feat-next-13-rsc-next-intl.vercel.app/docs/environments/server-client-components)
      - Strategy: pass translations to client components
      - Benefits of server-side internationalization:
        - Messages never leave the server, no need to serialize data for client
        - No need to load internationalization code on the client
        - No need to split messages, e.g. based on routes or components
        - No runtime cost on the client side
        - No need to handle environment differences like different time zones
      - for Server Components see `pages.tsx`, `error.tsx`, `not-found.tsx`
      - for Client Components see `[locale]/layout.tsx` `locale/error.tsx`
        `locale/switcher.tsx` (TODO: check these!)
    - [rendering-icu-messages](https://next-intl-docs-git-feat-next-13-rsc-next-intl.vercel.app/docs/usage/messages#rendering-icu-messages)
    - [numbers](https://next-intl-docs-git-feat-next-13-rsc-next-intl.vercel.app/docs/usage/numbers)
    - [dates-times](https://next-intl-docs-git-feat-next-13-rsc-next-intl.vercel.app/docs/usage/dates-times)
    - [lists](https://next-intl-docs-git-feat-next-13-rsc-next-intl.vercel.app/docs/usage/lists)
    - [metadata-route-handlers](https://next-intl-docs-git-feat-next-13-rsc-next-intl.vercel.app/docs/environments/metadata-route-handlers)

### Messages

- Navbar and Pages namespaces

### APP

app/[locale] routes:

- [...catchAll]:
  - page
- about
  - page
- error
- layout
- not-found
- page

### Components

- layout
  - base
  - page
- locale
  - error
  - switcher
  - navigation-link

#### Layout

- base

#### Locale

- error: lazy loaded Error Component
- switcher: 2 locales or more locales

### Translations tools

- [crowdin.com](https://crowdin.com/) TMS
- [tolgee.io](https://tolgee.io) TMS
- [i18now.dev](https://i18now.dev/) AI translator
- [locize.com](https://locize.com/)

#### Other translations solutions (not used)

- [next-international](https://github.com/QuiiBz/next-international)
  - [international-types](https://github.com/QuiiBz/next-international/tree/main/packages/international-types)
- [next-i18n-router](https://github.com/i18nexus/next-i18n-router): by
  [i18nexus](https://i18nexus.com/) no `[locale]` path is needed (but no
  generateStaticParams), looks immature
- [next-i18next](https://github.com/i18next/next-i18next): not updated to app
  route
  - [i18next/next-13-app-dir-i18next-example-ts](https://github.com/i18next/next-13-app-dir-i18next-example-ts)
  - [locize.com/i18next](https://locize.com/blog/tags/i18next/)
