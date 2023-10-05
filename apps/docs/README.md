# Apps/Docs

base app for web projects

## TODO

- fix layout
- fix navigation
- add blog, news and other pages

## Features

- NextJs
- SEO & Analytics
- UI with PandaCss and Storybook
- ContentLayer

### SEO

NextJs 13.4 has SEO features, see [SEO & Metadata](#seo-and-metadata) We use
ContentLayer to feed SEO data to NextJS

- `robots.ts` and `sitemap.ts` special files
- `api/og` route generate ogImages
- `generateMetadata` function is used on Pages and Layout

### ContentLayer

[contentlayer.dev](https://contentlayer.dev/) turns your content into data (MDX,
CMS, etc)

see `content` folder for `posts` and `configs`

#### Define Document Types in `contentlayer.config.ts`

Defined documents:

- GlobalSeo (singleton)
  - url
  - title, titleTemplate, description
  - icon
  - ogImageApi
  - sitemapPaths
- Author
  - image
  - name
- Post
  - author
  - cover
  - seo
  - title
  - computedFields
    - url
    - slug
    - readingTime
    - wordCount
- Page (draft)
- Doc (draft)

Defined nested documents

- SEO
  - title, description
  - ogImage
  - publishedAt

#### Components

- `mdxComponents`: function which returns, Links and Images using Next Link and
  Next Image Components
- PostCard
- PostContent
- PostDate
- PostCover

#### Utils

- `generate-metadata`: generateSiteMetadata, generatePostMetadata
- `posts`: getSlugs, getSortedPosts, getPost

#### Tools & Plugins

- reading-time
- rehype-highlight
- remark-gfm

### UI

- [pandacss](https://panda-css.com/): CSS in JS design system
- [park-ui](https://park-ui.com/): ark-ui panda recipes and components
- [ark-ui](https://ark-ui.com/): ui components
- [shadow-panda](https://shadow-panda.dev/): for other components
- [storybook](https://storybook.js.org/): for Components documentation

#### Panda Presets

- [animated-pandacss](https://anubra266.github.io/animated-pandacss/): adds
  [animate.css](https://animate.style/)
- [panda-transitions-css](https://anubra266.github.io/panda-transitions-css/)
- [pandacss-preset-radix-colors](https://github.com/milandekruijf/pandacss-preset-radix-colors):
  adds [Radix Colors](https://www.radix-ui.com/colors)
- [pandacss-preset-typography](https://www.milandekruijf.com/work/pandacss-preset-typography):
  add [tailwind typography](https://tailwindcss.com/docs/typography-plugin)

#### Icons

- [react-simple-icons](https://simpleicons.org/)
- [lucide-react](https://lucide.dev/)

#### Other Components

- [react-hook-form](https://www.react-hook-form.com/)

### React Hooks and Utilities

- [usehooks-ts](https://usehooks-ts.com/): React hook library
- [react-merge-refs](https://github.com/gregberge/react-merge-refs)
- [ts-pattern](https://github.com/gvergnaud/ts-pattern): Pattern Matching for
  TypeScript
- [zustand](https://github.com/pmndrs/zustand) State Manager
  - [usage-in-next.js](https://docs.pmnd.rs/zustand/integrations/persisting-store-data#usage-in-next.js)
  - [medium/state-management-in-next-js-13-app-router](https://medium.com/@ahmedenany9812/state-management-in-next-js-13-app-router-3892a56261ce)
  - [vercel/react-context-state-management-nextjs](https://vercel.com/guides/react-context-state-management-nextjs)

## NextJs Guide

### Files Conventions (by Hierarchy)

[api-reference/file-conventions](https://nextjs.org/docs/app/api-reference/file-conventions)

- `layout`: Shared UI for a segment and its children
- `template`: Specialized re-rendered Layout UI
- `error`: Error UI for a segment and its children (React error boundary)
- `loading`: Loading UI for a segment and its children (React suspense boundary)
- `not-found`: Not found UI for a segment and its children (React error
  boundary)
- `page`: Unique UI of a route and make routes publicly accessible
- `route`: Server-side API endpoint
- `default`: Fallback UI for Parallel Routes
- `global-error`: Global Error UI

### Main References from docs

- [functions](https://nextjs.org/docs/app/api-reference/functions)
- [next-config-js](https://nextjs.org/docs/app/api-reference/next-config-js)
- [next-cli](https://nextjs.org/docs/app/api-reference/next-cli)
- [nextjs-compiler](https://nextjs.org/docs/architecture/nextjs-compiler)

### Components

- [font](https://nextjs.org/docs/app/api-reference/components/font)
- [image](https://nextjs.org/docs/app/api-reference/components/image)
- [link](https://nextjs.org/docs/app/api-reference/components/link)
- [script](https://nextjs.org/docs/app/api-reference/components/script)

### SEO and Metadata

## [metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

- Config-based Metadata
  - Static Metadata
  - Dynamic Metadata
- File-based Metadata (will override any config-based metadata)
  - favicon.ico, apple-icon.jpg, and icon.jpg
  - opengraph-image.jpg and twitter-image.jpg
  - robots.txt
  - sitemap.xml
- Dynamic Image Generation
  - [og-image-generation](https://vercel.com/docs/functions/edge-functions/og-image-generation)
  - [example/vercel-og-nextjs](https://github.com/vercel/examples/tree/main/edge-functions/vercel-og-nextjs)
- JSON-LD
  - [google/schema-dts](https://github.com/google/schema-dts) for typescript
    schema
  - [test/rich-results](https://search.google.com/test/rich-results)
  - [validator.schema]https://validator.schema.org/(https://validator.schema.org/)
- [generate-metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)

### Rendering Server and Client Components

- [server-components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
  - Static Rendering at build time and after data revalidation with cached
    results
  - Dynamic Rendering for dynamic function or uncached data
    - dynamic functions
      - [cookies](https://nextjs.org/docs/app/api-reference/functions/cookies)
        and
        [headers](https://nextjs.org/docs/app/api-reference/functions/headers)
      - [useSearchParameters](https://nextjs.org/docs/app/api-reference/functions/use-search-params)
        (wrap a CC using them in a `<Suspense />` boundary)
      - [searchParams](https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional)
        in Pages
  - Streaming: improve performances deferring component loading see
    [Loading UI and Streaming](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)
- [client-components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
  - use CC for code Not available on the server:
    - ReactContext
    - createContext
    - useState
    - useEffect
    - usePathname
    - document and window object
    - localStorage, geolocation and other API
  - wrap with `"use client"` third-party components that not have use client
- [composition-patterns](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)

  - prefer SC
  - move CC down the three
  - use `"server only"` to isolate code from the client
  - use
    [fetch](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-server-with-fetch)
    and cache to share data between components
  - pass serialized props from SC
  - for not serializable data
    - fetch on the client
      [with external library](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#fetching-data-on-the-client-with-third-party-libraries)
    - fetch on the server
      [with Route Handler](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
  - supported patterns:
    - Passing SC to CC as Props
  - unsupported patterns:
    - Importing SC into CC

- [edge-and-nodejs-runtimes](https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes)

### Routing

#### Route Centric Project Structure

Next.js supports storing application code (including app) inside an optional src
directory

Store project files outside of `app` This strategy stores all application code
in shared folders in the root of your project and keeps the app directory purely
for routing purposes. components, lib, ui, utils, hooks, styles, etc.

In the `app` directory, nested folder hierarchy defines route structure.

Each folder represents a route segment that is mapped to a corresponding segment
in a URL path.

A route is not publicly accessible until a page.js or route.js file is added to
a route segment.

Private folders can be created by prefixing a folder with an underscore:
`_folderName`

This indicates the folder is a private implementation detail and should not be
considered by the routing system, thereby opting the folder and all its
subfolders out of routing.

Route groups can be created by wrapping a folder in parenthesis: `(folderName)`,
it is used for:

- Organizing routes into groups e.g. by site section, intent, or team.
- Enabling nested layouts in the same route segment level:

  - Creating multiple nested layouts in the same segment, including multiple
    root layouts
  - Adding a layout to a subset of routes in a common segment

#### Parallel Routes

[parallel-routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)

Parallel routes are created using named slots. Slots are defined with the
`@folder` convention, and are passed to the same-level layout as props.

Parallel Routing can be used to

- render
  [modals](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals)
- implement
  [conditional-routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#conditional-routes)

see [nextgram](https://github.com/vercel-labs/nextgram/tree/main/app) for an
example intercepting routes

#### Dynamic Routes

A Dynamic Segment can be created by wrapping a folder's name in square brackets:
[folderName]. For example, [id] or [slug].

Dynamic Segments are passed as the params prop to layout, page, route, and
generateMetadata functions.

The
[generateStaticParams](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params)
function can be used in combination with dynamic route segments to statically
generate routes at build time instead of on-demand at request time.

Dynamic Segments can be extended to
[catch-all](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments)
subsequent segments by adding an ellipsis inside the brackets `[...folderName]`.

Catch-all Segments can be made optional by including the parameter in double
square brackets: `[[...folderName]]`.

Other Official Docs:

- [route-groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)
- [dynamic-routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [intercepting-routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)
- [route-handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)

#### Pages, Layout, Templates

A page is UI that is unique to a route. A layout is UI that is shared between
multiple pages. A Template is similar to layout but create a new instance for
each of their children on navigation with a new state

- Enter/exit animations using CSS or animation libraries.
- Features that rely on useEffect (e.g logging page views) and useState (e.g a
  per-page feedback form).
- To change the default framework behavior. For example, Suspense Boundaries
  inside layouts only show the fallback the first time the Layout is loaded and
  not when switching - pages. For templates, the fallback is shown on each
  navigation..

The Next.js router uses server-centric routing with client-side navigation.

There are two ways to navigate between routes:

- `<Link>`Component
- `useRouter` Hook

You can use `usePathname()` to determine if a link is active.

Check
[path-to-regexp](https://github.com/pillarjs/path-to-regexp#path-to-regexp-1) to
get tips on path parsing

#### How Navigation Works

- A route transition is initiated using `<Link>` or calling `router.push()`.
- The router updates the URL in the browser's address bar.
- The router avoids unnecessary work by re-using segments that haven't changed
  (e.g. shared layouts) from the client-side cache. This is also referred to as
  partial rendering.
- If the conditions of soft navigation are met, the router fetches the new
  segment from the cache rather than the server. If not, the router performs a
  hard navigation and fetches the SC payload from the server.
- If created, loading UI is shown from the server while the payload is being
  fetched. The router uses the cached or fresh payload to render the new
  segments on the client.

Other Official Docs:

- [pages-and-layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
- [pages-and-layouts:templates](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#templates)
- [linking-and-navigating](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)
- [loading-ui-and-streaming](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)
- [error-handling](https://nextjs.org/docs/app/building-your-application/routing/error-handling)
- [colocation](https://nextjs.org/docs/app/building-your-application/routing/colocation)

### Date Fetch

Whenever possible, it's best to fetch data in the segment that uses it. This
also allows you to show a loading state for only the part of the page that is
loading, and not the entire page.

- [fetching-caching-and-revalidating](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating)
- [patterns](https://nextjs.org/docs/app/building-your-application/data-fetching/patterns)
- [forms-and-mutations](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations)
- [cookies](https://nextjs.org/docs/app/api-reference/functions/cookies)
- [headers](https://nextjs.org/docs/app/api-reference/functions/headers)

### Caching

- [caching](https://nextjs.org/docs/app/building-your-application/caching)

### Styling

- [css-in-js](https://nextjs.org/docs/app/building-your-application/styling/css-in-js)

### Optimizing

- [images](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [fonts](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [scripts](https://nextjs.org/docs/app/building-your-application/optimizing/scripts)
- [static-assets](https://nextjs.org/docs/app/building-your-application/optimizing/static-assets)
- [lazy-loading](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading)
- [analytics](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)
- [open-telemetry](https://nextjs.org/docs/app/building-your-application/optimizing/open-telemetry)
- [instrumentation](https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation)

### Configuring

- [typescript](https://nextjs.org/docs/app/building-your-application/configuring/typescript)
- [eslint](https://nextjs.org/docs/app/building-your-application/configuring/eslint)
- [environment-variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
- [absolute-imports-and-module-aliases](https://nextjs.org/docs/app/building-your-application/configuring/absolute-imports-and-module-aliases)
- [mdx](https://nextjs.org/docs/app/building-your-application/configuring/mdx)
- [src-directory](https://nextjs.org/docs/app/building-your-application/configuring/src-directory)
- [draft-mode](https://nextjs.org/docs/app/building-your-application/configuring/draft-mode)
- [content-security-policy](https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy)

### Deploying

- [deploying](https://nextjs.org/docs/app/building-your-application/deploying)
- [static-exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

### Upgrading

- [codemods](https://nextjs.org/docs/app/building-your-application/upgrading/codemods)
- [app-router-migration](https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration)
