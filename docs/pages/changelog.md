---
title: Changelog
date: 2020-11-19
---

# Changelog

## [v2.0.1](https://github.com/Microflash/remarkability/releases/tag/v2.0.1)

- **Changed** padding and font-size of some inline elements
- **Removed** bold sample keyboard input styles

## [v2.0.0](https://github.com/Microflash/remarkability/releases/tag/v2.0.0)

- **Added** simpler parent resolver mixin
- **Added** bold table head elements
- **Added** lead paragraph styles with the `$lead` selector variable and `$enable-lead-paragraph` flag
- **Added** the semibold font-weight with the `$weight-semibold` variable
- **Added** the styles for the `var` element
- **Added** the semantic background for the `del` element with the `$background-del` variable
- **Added** proper `overflow-wrap` to inline code elements
- **Changed** native font-stack with the addition of `ui-sans-serif` and `ui-monospace`
- **Changed** the font-size for the heading elements
- **Changed** reduce the font-weight to semibold for the headings 
- **Changed** reduce the bottom padding of the headings
- **Changed** more contextual spacing between block elements nested in a list
- **Changed** tweak to the padding of table cells
- **Changed** bold keyboard input element in the sample text
- **Changed** slightly increase the default margin
- **Changed** more compact and prominent blockquote
- **Changed** slightly smaller default font size
- **Changed** the font size of the table cells to inherit from parent
- **Changed** lighter selection background
- **Removed** the normal font-weight alongwith the `$weight-normal` variable
- **Removed** the bottom-border from `h3` element

## [v1.1.0](https://github.com/Microflash/remarkability/releases/tag/v1.1.0)

- **Added** split Sass into composable parts for granular import

### Recommendations

With this change, **Remarkability** provides you the flexibility to import what you need; you may choose to import the entire `remarkability.scss` file or pick the specific parts. The following parts are available for you to import individually.

```scss
@use 'node_modules/@microflash/remarkability/scss/variables';
@use 'node_modules/@microflash/remarkability/scss/root';
@use 'node_modules/@microflash/remarkability/scss/inline';
@use 'node_modules/@microflash/remarkability/scss/media';
@use 'node_modules/@microflash/remarkability/scss/block';
@use 'node_modules/@microflash/remarkability/scss/headings';
@use 'node_modules/@microflash/remarkability/scss/lists';
@use 'node_modules/@microflash/remarkability/scss/form';
@use 'node_modules/@microflash/remarkability/scss/blockquote';
@use 'node_modules/@microflash/remarkability/scss/code';
@use 'node_modules/@microflash/remarkability/scss/table';
```

## [v1.0.0](https://github.com/Microflash/remarkability/releases/tag/v1.0.0)

- **Added** the `$root` variable to customize root element
- **Removed** the global variant

### Recommendations

Even though the global variant has been removed, you can still build it by setting the `$root` variable to `'body'` using Sass.

## [v0.11.0](https://github.com/Microflash/remarkability/releases/tag/v0.11.0)

- **Fixed** the incorrect declaration of font-family in case of custom or variable fonts

## [v0.10.0](https://github.com/Microflash/remarkability/releases/tag/v0.10.0)

- **Added** the `conten-visibility` control with the `$enable-content-visibility` flag

## [v0.9.2](https://github.com/Microflash/remarkability/releases/tag/v0.9.2)

- **Fixed** the `prepend` function to correctly prepend font-families

## [v0.9.0](https://github.com/Microflash/remarkability/releases/tag/v0.9.0)

- **Added** emphasis on definition terms in a definition list
- **Changed** more natural spacing adjacent to headings
- **Changed** reworked disclosure element styles
- **Changed** enable multiline wrap, responsive tables and smooth scrolling
- **Changed** lighter table background color
- **Changed** rename the variable `$family-base` to `$family-sans-custom`
- **Changed** rename the variable `$family-code` to `$family-code-custom`
- **Changed** rename the variable `$family-base-variable` to `$family-sans-variable`
- **Changed** rename the variable `$color-vibrant` to `$color-active`
- **Changed** rename the variable `$color-muted` to `$color-passive`
- **Changed** rename the variable `$color-link-hovered` to `$color-link-active`
- **Changed** rename the variable `$color-link-visited` to `$color-link-passive`
- **Changed** rename the variable `$link-hover` to `$link-active`
- **Changed** rename the variable `$compact-lists` to `$enable-compact-lists`
- **Changed** rename the variable `$multiline-wrap` to `$enable-multiline-wrap`
- **Changed** rename the variable `$custom-selection` to `$enable-selection-background`
- **Changed** rename the variable `$custom-scrollbar` to `$enable-custom-scrollbar`
- **Changed** rename the variable `$custom-colors` to `$enable-custom-colors`
- **Changed** rename the variable `$custom-fonts` to `$enable-custom-fonts`
- **Changed** rename the variable `$smooth-fonts` to `$enable-font-smoothing`
- **Changed** rename the variable `$adjust-text` to `$enable-text-inflation`
- **Changed** rename the variable `$round-media` to `$enable-media-radius`
- **Changed** rename the variable `$round-blocks` to `$enable-block-radius`
- **Changed** rename the variable `$heading-borders` to `$enable-heading-border`
- **Changed** rename the variable `$show-underline` to `$enable-link-underline`
- **Changed** rename the variable `$table-hover` to `$enable-table-hover`
- **Changed** rename the variable `$table-striped` to `$enable-table-stripes`
- **Changed** rename the variable `$responsive-tables` to `$enable-responsive-tables`
- **Changed** rename the variable `$visited-links` to `$enable-visited-links`
- **Changed** rename the variable `$hovered-links` to `$enable-active-links`
- **Changed** rename the variable `$variable-fonts` to `$enable-variable-fonts`
- **Changed** rename the variable `$scroll-smoothly` to `$enable-smooth-scrolling`

### Recommendations

You no longer need to override the entire font-family using `$family-base`, `$family-code` and `$family-base-variable`; instead, provide the values for `$family-sans-custom`, `$family-code-custom`, `$family-sans-variable` or `$family-code-variable`. These values can be a single value or a list of values. **Remarkability** will prepend these values with a list of corresponding fallback font-families using the `font` mixin.

## [v0.8.5](https://github.com/Microflash/remarkability/releases/tag/v0.8.5)

- **Added** the normal font-weight using `$weight-normal`

## [v0.8.4](https://github.com/Microflash/remarkability/releases/tag/v0.8.4)

- **Added** linting in the development pipeline

## [v0.8.3](https://github.com/Microflash/remarkability/releases/tag/v0.8.3)

- **Added** `system-ui` in the default native font-stack
- **Changed** refactor the `font` mixin to accept all font-families

## [v0.8.2](https://github.com/Microflash/remarkability/releases/tag/v0.8.2)

- **Changed** move `$font-families` map to `_variables.scss`

## [v0.8.1](https://github.com/Microflash/remarkability/releases/tag/v0.8.1)

- **Added** styles for responsive tables that can be enabled by the `$responsive-tables` flag
- **Added** smooth scrolling that can be enabled by the `$scroll-smoothly` flag
- **Added** custom selection background using the `$background-selected` variable and `$custom-selection` flag
- **Added** custom scrollbar colors using the `$background-scrollbar` and `$scrollbar` variables and `$custom-scrollbar` flag

## [v0.8.0](https://github.com/Microflash/remarkability/releases/tag/v0.8.0)

- **Added** a map of font families `$font-families`
- **Added** multiline wrap for inline elements
- **Added** the variable `$font-size-code` to control the font size of the `pre`, `code` and codeblock elements
- **Changed** rename the variable `$family-default` to `$family-base`
- **Changed** rename the variable `$family-default-var` to `$family-base-variable`
- **Changed** rename the variable `$family-code-var` to `$family-code-variable`
- **Changed** rename the variable `$font-size` to `$font-size-base`
- **Changed** rename the variable `$color-default` to `$color-base`
- **Changed** rename the variable `$color-emphasis` to `$color-vibrant`
- **Changed** rename the variable `$color-monospace` to `$color-code`
- **Changed** rename the variable `$color-visited-link` to `$color-link-visited`
- **Changed** rename the variable `$color-hovered-link` to `$color-link-hovered`
- **Changed** rename the variable `$border` to `$border-color`
- **Changed** rename the variable `$image-radius` to `$media-radius`
- **Changed** rename the variable `$codeblock-radius` to `$block-radius`
- **Changed** rename the variable `$text-strong` to `$text-bold`
- **Changed** rename the variable `$closer-lists` to `$compact-lists`
- **Changed** rename the variable `$font-smoothing` to `$smooth-fonts`
- **Changed** rename the variable `$text-adjusting` to `$adjust-text`
- **Changed** rename the variable `$round-images` to `$round-media`
- **Changed** rename the variable `$round-codeblocks` to `$round-blocks`

### Recommendations

v0.8.0 uses a map of font families `$font-families`. You can add custom font-families in this map

```scss
$font-families: (
  'base': variables.$family-base variables.$family-base-variable,
  'code': variables.$family-code variables.$family-code-variable
) !default;
```

and use the `font` mixin to apply a font-family as follows &mdash;

```scss
@include mixins.font('base');
```

## [v0.7.2](https://github.com/Microflash/remarkability/releases/tag/v0.7.2)

- **Added** the native font stacks to `$family-sans-native` and `$family-code-native` variables

## [v0.7.1](https://github.com/Microflash/remarkability/releases/tag/v0.7.1)

- **Added** a global variant that can be used without `.remarkability` root class
- **Removed** the `$base-selector` variable for the root class
- **Changed** the values of `$color-muted` and `$background-code`

## [v0.7.0](https://github.com/Microflash/remarkability/releases/tag/v0.7.0)

- **Added** switch to [Sass modules](https://sass-lang.com/blog/the-module-system-is-launched) due to which all the variables and mixins are namespaced under `variables` and `mixins` namespaces respectively. Sass provides the [mechanisms to control namespacing](https://sass-lang.com/blog/the-module-system-is-launched#controlling-namespaces), if required.
- **Added** support for [variable fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide) through `$family-default-var` and `$family-code-var` variables. The fonts are enabled with `$variable-fonts` and `font-variation-settings: normal` feature-query.
- **Added** the `$background-body` variable to set the body background
- **Added** the `$image-radius` and `$codeblock-radius` variables to customize the image and codeblock radiuses respectively
- **Added** the `$opacity` variable to control the opacity of the placeholder text of the `input` and `textarea` elements
- **Changed** rename the variable `$family-remarkability` to `$family-default`
- **Changed** rename the variable `$weight-strong` to `$weight-bold`
- **Changed** rename the variable `$image-rounding` to `$round-images`
- **Changed** rename the variable `$codeblock-rounding` to `$round-codeblocks`
- **Changed** rename the variable `$color-text-light` to `$color-muted`
- **Changed** rename the variable `$text-light` to `$text-muted`

### Recommendations

This is a major release with breaking changes and the following recommendations.

#### Declaring font family

Instead of using `$family-default` and `$family-code` variables directly to declare `font-family` on a selector, use the `base-font` and `code-font` mixins.

#### Sass module system

Take advantage of the new syntax offered by Sass module system, e.g., you can now import the variables and override them as follows &mdash;

```scss
@use 'node_modules/@microflash/remarkability/scss/variables' with (
  $closer-lists: true,
  $custom-colors: true,
  $custom-fonts: true,
  $text-adjusting: true,
  $round-images: true,
  $round-codeblocks: true,
  $heading-borders: true,
  $hovered-links: true
);
```

## [v0.6.9](https://github.com/Microflash/remarkability/releases/tag/v0.6.9)

- **Added** the `$base-selector` variable for the root class

## [v0.6.8](https://github.com/Microflash/remarkability/releases/tag/v0.6.8)

- **Added** `$image-rounding` and `$codeblock-rounding` flags to enable border-radius for images and codeblocks
- **Added** `$hovered-links` flag and `$color-hovered-link` variable to set color for link focus and hover states
- **Changed** increase heading `top-space`
- **Changed** increase `line-height` for `h1` and `h2` elements
- **Changed** reduce `blockquote` padding

## [v0.6.7](https://github.com/Microflash/remarkability/releases/tag/v0.6.7)

- **Changed** switch from `node-sass` to `dart-sass`

## [v0.6.6](https://github.com/Microflash/remarkability/releases/tag/v0.6.6)

- **Fixed** the word wrapping for `code`

## [v0.6.5](https://github.com/Microflash/remarkability/releases/tag/v0.6.5)

- **Changed** improve `table` and `code` styles
- **Changed** streamline Sass variables
- **Changed** improve postcss configuration 

## [v0.6.3](https://github.com/Microflash/remarkability/releases/tag/v0.6.3)

- **Added** option for `text-size-adjust`
- **Added** support for top-level font-size

## [v0.6.1](https://github.com/Microflash/remarkability/releases/tag/v0.6.1)

- **Added** support for `summary` and `details`

## [v0.6.0](https://github.com/Microflash/remarkability/releases/tag/v0.6.0)

- **Added** first pre-release draft
