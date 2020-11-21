---
title: Migration
date: 2020-11-19
---

# Migration

If you're using Sass to customize **Remarkability**, this section can help you migrate from the previous versions.

### Migrating from v0.x.x to v1.0.0

In v1.0.0, **Remarkability** deprecated its global variant. If needed, you can still build it by setting `$root` variable to `body` using Sass.

### Migrating from v0.8.x to v0.9.x

#### Renamed variables

| Previous variable name `v0.8.x` | New variable name `v0.9.x` |
| ------------------- | ------------------- |
| `$family-base` | `$family-sans-custom` |
| `$family-code` | `$family-code-custom` |
| `$family-base-variable` | `$family-sans-variable` |
| `$color-vibrant` | `$color-active` |
| `$color-muted` | `$color-passive` |
| `$color-link-hovered` | `$color-link-active` |
| `$color-link-visited` | `$color-link-passive` |
| `$link-hover` | `$link-active` |
| `$compact-lists` | `$enable-compact-lists` |
| `$multiline-wrap` | `$enable-multiline-wrap` |
| `$custom-selection` | `$enable-selection-background` |
| `$custom-scrollbar` | `$enable-custom-scrollbar` |
| `$custom-colors` | `$enable-custom-colors` |
| `$custom-fonts` | `$enable-custom-fonts` |
| `$smooth-fonts` | `$enable-font-smoothing` |
| `$adjust-text` | `$enable-text-inflation` |
| `$round-media` | `$enable-media-radius` |
| `$round-blocks` | `$enable-block-radius` |
| `$heading-borders` | `$enable-heading-border` |
| `$show-underline` | `$enable-link-underline` |
| `$table-hover` | `$enable-table-hover` |
| `$table-striped` | `$enable-table-stripes` |
| `$responsive-tables` | `$enable-responsive-tables` |
| `$visited-links` | `$enable-visited-links` |
| `$hovered-links` | `$enable-active-links` |
| `$variable-fonts` | `$enable-variable-fonts` |
| `$scroll-smoothly` | `$enable-smooth-scrolling` |

#### Font-family declaration

In v0.8.x, Remarkability provided `$family-base`, `$family-code` and `$family-base-variable` which you needed to override with a custom font-family and fallback font-families.

In v0.9.x, you don't have to override the entire font-family. Instead, when a valid value for `$family-sans-custom`, `$family-code-custom`, `$family-sans-variable` or `$family-code-variable` is provided, Remarkability will prepend these values with a list of corresponding fallback font-families. 

Additionally, you can provide a list of custom font-families as the values of the above variables. The `font` mixin will appropriately merge them with the native font stack.

### Migrating from v0.7.x to v0.8.x

#### Renamed variables

| Previous variable name `v0.7.x` | New variable name `v0.8.x` |
| ------------------- | ------------------- |
| `$family-default` | `$family-base` |
| `$family-default-var` | `$family-base-variable` |
| `$family-code-var` | `$family-code-variable` |
| `$font-size` | `$font-size-base` |
| `$color-default` | `$color-base` |
| `$color-emphasis` | `$color-vibrant` |
| `$color-monospace` | `$color-code` |
| `$color-visited-link` | `$color-link-visited` |
| `$color-hovered-link` | `$color-link-hovered` |
| `$border` | `$border-color` |
| `$image-radius` | `$media-radius` |
| `$codeblock-radius` | `$block-radius` |
| `$text-strong` | `$text-bold` |
| `$closer-lists` | `$compact-lists` |
| `$font-smoothing` | `$smooth-fonts` |
| `$text-adjusting` | `$adjust-text` |
| `$round-images` | `$round-media` |
| `$round-codeblocks` | `$round-blocks` |

#### Font-family declaration

Remarkability now maintains a map of font-families

```scss
$font-families: (
  'base': variables.$family-base variables.$family-base-variable,
  'code': variables.$family-code variables.$family-code-variable
) !default;
```

which is used by a mixin `font`. To apply a font-family, pass the corresponding key to the mixin.

```scss
@include mixins.font('base');
```

You can extend `$font-families` map by adding custom font-families and include them using `font` mixin as shown above.

### Migrating from v0.6.x to v0.7.x

#### Renamed variables

| Previous variable name `v0.6.x` | New variable name `v0.7.x` |
| ------------------- | ------------------- |
| `$family-remarkability` | `$family-default` |
| `$weight-strong` | `$weight-bold` |
| `$color-text-light` | `$color-muted` |
| `$text-light` | `$text-muted` |
| `$image-rounding` | `$round-images` |
| `$codeblock-rounding` | `$round-codeblocks` |

#### Font-family declaration

Instead of using `$family-default` and `$family-code` variables directly to declare `font-family` on a selector, use `base-font` and `code-font` mixins.

#### Customizing variables

Remarkability v0.7.x uses [Sass Module System](https://sass-lang.com/blog/the-module-system-is-launched). Take advantage of the new syntax offered by `with`.

Before v0.7.0, you'd declare variable overrides, in a partial, say `_variables.scss`, as follows:

```scss
$closer-lists: true !default;
$custom-colors: true !default;
$custom-fonts: true !default;
$text-adjusting: true !default;
$round-images: true !default;
$round-codeblocks: true !default;
$heading-borders: true !default;
$hovered-links: true !default;
```

Now, you can do the same more expressively using the new syntax.

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

As a natural progression of the module system, all the variables and mixins are namespaced under `variables` and `mixins` namespaces respectively. Sass provides [mechanisms to control namespacing](https://sass-lang.com/blog/the-module-system-is-launched#controlling-namespaces), if you need them.
