# Panda UI

[park-ui](https://park-ui.com/) based User Interface built with Ark UI and Panda
CSS. Inspired by Park-Ui website. See
<https://github.com/cschroeter/park-ui/tree/main/website/src/components> for
more components.

## TODO

- remove unused deps (presets)
- find solutions for external deps (next-link, next-intl, etc)

## Presets

- [animated-pandacss](https://anubra266.github.io/animated-pandacss/): adds
  [animate.css](https://animate.style/)
- [panda-transitions-css](https://anubra266.github.io/panda-transitions-css/)
- [pandacss-preset-radix-colors](https://github.com/milandekruijf/pandacss-preset-radix-colors):
  adds [Radix Colors](https://www.radix-ui.com/colors)
- [pandacss-preset-typography](https://www.milandekruijf.com/work/pandacss-preset-typography):
  add [tailwind typography](https://tailwindcss.com/docs/typography-plugin)

## Tools

- [@ark-ui/react](https://ark-ui.com/)
- [@icons-pack/react-simple-icons](https://simpleicons.org/)
- [lucide-react](https://lucide.dev/)
- [react-hook-form](https://www.react-hook-form.com/)
- [ts-pattern](https://github.com/gvergnaud/ts-pattern)
- [usehooks-ts](https://usehooks-ts.com/)
- [zustand](https://github.com/pmndrs/zustand)
- [compound-pattern](https://javascriptpatterns.vercel.app/patterns/react-patterns/compound-pattern)
  Guides

## Components

### Layout

- breadcrumbs
- navbar
  - nav
    - main
    - socials
  - sidebar
    - container
    - switch
  - styled slots
    - header
    - center
    - left
    - right

### UI

#### Base

- badge
- button
- icon
- textarea
- typography

#### withProvider

see
<https://panda-css.com/docs/concepts/slot-recipes#styling-jsx-compound-components>

- card
- dialog
- drawer
- menu
- popover
- radio-button-group
- segment-group
- select
- slider
- tooltip

### Marketing

- color-mode-button
- feedback-popover
- theme-generator
- theme-popover
- theme
  - border-radius-slider
  - color-palette-picker
  - copy-code-button
  - font-family-select
  - gray-palette-picker
  - theme-config-dialog
  - theme-context-menu

### Lib for theme handling

- create-style-context
- get-border-radii-tokens
- slugify
- use-color-mode
- use-scroll-directions
- use-theme-generator
- use-theme-store

### Components to implement

- [mobile-social-network-profile-page](https://tailwindcomponents.com/component/mobile-social-network-profile-page)
- [merakui navbars](https://merakiui.com/components/navbars)
- [kutty headers](https://kutty.netlify.app/components/headers/)
