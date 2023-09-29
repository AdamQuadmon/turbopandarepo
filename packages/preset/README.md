# Preset Panda

Inspired by
[preset-atlaskit](https://github.com/chakra-ui/panda/tree/main/packages/preset-atlaskit)
Contains
[Fluid Typography CSS](https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/)
utility and styles

## New Stuff

- globalCss html: fontSmoothing, textSizeAdjust, textRendering, minHeight
- breakpoints: 3xl
- keyframes: skeleton
- layerStyles: offShadow, section

## Recipes

- banner
  - root
  - content
  - closeButton
  - closeIcon
- callout
  - root
  - content
  - icon
- navbar
  - root
  - blur
  - header
  - linkChat
  - linkIcon
  - linkLogo
  - linkMenu
  - linkNav
  - linkText
  - mobile
  - navCenter
  - navLeft
  - navMain
  - navRight
  - navSocials
  - root
  - sidebar
  - sidebarContainer
  - sidebarSwitch

## Tokens

- animations
  - shrink-out
  - skeleton
  - spin
- borders
  - subtle
  - danger
  - accent
- colors
  - black
  - blackAlpha
  - current
  - dark
  - primary: based on --primary-hue
  - socials: brand colors
  - withe
  - witheAlpha
- durations
  - fast
  - largeMs
  - mediumMs
  - smallMs
- easings
  - easeIn
  - easeInOut
  - easeOut
- fonts
  - body: --font-mona-sans
  - heading: --font-mona-sans
  - mono: --font-fira-code
- fontSizes: fluid values from 1 to 8
- gradients: simple and primary
- radii
  - card
  - none
  - pill
  - round
- shadows
  - focus
  - subtle
  - accent
  - realistic
- sizes
  - channel
  - desktop
  - screenH
  - screenW
- spacing: fluid values
  - 2xl
  - 2xs
  - 3xl
  - 3xs
  - l
  - m
  - s
  - xl
  - xs
- zIndex
  - init
  - modal
  - nuclear
  - over
  - under

## Semantic Tokens

- background
  - accent: based on color names, can be bolder, subtle, subtler, subtlest
  - disabled
  - brand, input, inverse.subtle
    - bold: hovered, pressed
  - danger, discovery, information, selected, slate, success, warning: hovered,
    pressed
    - bold: hovered, pressed
- blanket: danger, selected
- border
  - accent: based on color names
  - bold
  - brand
  - danger
  - disabled
  - discovery
  - focused
  - information
  - input
  - inverse
  - selected
  - success
  - warning
- icon
  - accent: based on color names
  - brand
  - danger
  - disabled
  - discovery
  - information
  - inverse
  - selected
  - subtle
  - success
  - warning
    - inverse
- interaction: hovered, pressed
- link: pressed
- skeleton: subtle
- text
  - accent: based on color names
  - brand
  - danger
  - disabled
  - discovery
  - information
  - inverse
  - selected
  - subtle
  - subtlest
  - success
  - warning
    - inverse
