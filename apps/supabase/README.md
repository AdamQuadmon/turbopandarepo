# Apps/Supabase

base supabase app for web projects

## TODO

- supabase:
  - auth provider
  - data provider

## Features

- NextJs with i18n Supabase Auth & Data provider: user and content management
- UI with PandaCss: user account, photo gallery, and checkout
- Stripe Payment Gateway: checkout and subscriptions

### Supabase

- [quickstarts](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [User Management App](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs)
- [Partner Gallery](https://github.com/supabase-community/partner-gallery-example#supabase-partner-gallery-example)

#### AuthProvider

- [Use Supabase with Next.js](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Build a User Management App with NextJS](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs)

- app/auth/callback
- app/[lng]/(auth)/login
- app/[lng]/(auth)/register
- app/[lng]/(auth)/forgot-password
- app/[lng]/(auth)/update-password

#### DataProvider

[partner-gallery-example](https://github.com/supabase-community/partner-gallery-example)

#### Stripe

Stripe integration is got from
[vercel/nextjs-subscription-payments](https://github.com/vercel/nextjs-subscription-payments)
It adds:

- app/api/create-checkout-session
- app/api/create-portal-link
- app/api/webhooks
- utility/providers/stripeProvider
- utility/providers/stripeDataProvider

## Inspirations

- [supabase user-management](https://github.com/supabase/supabase/tree/master/examples/user-management)
  for the auth and account pages
- [nextgram](https://github.com/vercel-labs/nextgram) for the gallery modal
- [instagram-clone-one](https://github.com/ntabucejo/instagram-clone-one/) for
  layout
- [unsplash-clone-one](https://github.com/ntabucejo/instagram-clone-one/) for
  layout
- [street-photography-viewer](https://github.com/amannn/street-photography-viewer)
  which use types from [unsplash-js](https://github.com/unsplash/unsplash-js)
