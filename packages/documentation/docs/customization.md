# Customization

You can easily customize **Remarkability** with [Sass](https://github.com/Microflash/remarkability/tree/master/packages/library/scss), using **variables** and **options**.

### Variables

Variables control the values of the properties of elements.

| Variable | Default value |
| --------- | -------------- |
| `$family-sans-native` | <pre>system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'</pre> |
| `$family-code-native` | <pre>SFMono-Regular, 'Roboto Mono', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace</pre> |
| `$family-sans-custom` | `null` |
| `$family-code-custom` | `null` |
| `$family-sans-variable` | `null` |
| `$family-code-variable` | `null` |
| `$font-families` | <pre>(&NewLine;  'base': (&NewLine;    $family-sans-native,&NewLine;    $family-sans-custom,&NewLine;    $family-sans-variable&NewLine;  ),&NewLine;  'code': (&NewLine;    $family-code-native,&NewLine;    $family-code-custom,&NewLine;    $family-code-variable&NewLine;  )&NewLine;)</pre> |
| `$weight-normal` | `400` |
| `$weight-bold` | `700` |
| `$weight-headings` | `$weight-bold` |
| `$font-size-base` | `calc(1rem + 0.25vw)` |
| `$font-size-code` | `0.9em` |
| `$font-size-small` | `0.8em` |
| `$text-size-adjust` | `100%` |
| `$color-base` | `hsl(0, 1%, 14%)` |
| `$color-active` | `hsl(0, 0%, 9%)` |
| `$color-passive` | `hsl(0, 1%, 38%)` |
| `$color-link` | `hsl(210, 100%, 40%)` |
| `$color-link-active` | `hsl(210, 80%, 50%)` |
| `$color-link-passive` | `hsl(325, 60%, 40%)` |
| `$color-code` | `hsl(0, 58%, 46%)` |
| `$background-body` | `hsl(0, 0%, 100%)` |
| `$background-code` | `hsl(0, 5%, 96%)` |
| `$background-ins` | `hsl(125, 50%, 75%)` |
| `$background-mark` | `hsl(45, 75%, 75%)` |
| `$background-table` | `hsl(0, 0%, 98%, 0.25)` |
| `$background-table-even` | `hsl(0, 3%, 98%)` |
| `$background-table-hover` | `hsl(0, 5%, 96%)` |
| `$background-selected` | `hsla(210, 100%, 35%, 0.25)` |
| `$background-scrollbar` | `hsl(0, 5%, 96%)` |
| `$border-color` | `hsl(0, 0%, 91%)` |
| `$opacity` | `0.5` |
| `$radius` | `5px` |
| `$media-radius` | `$radius` |
| `$block-radius` | `$radius` |
| `$text` | `$color-base` |
| `$text-code` | `$color-code` |
| `$text-bold` | `$color-active` |
| `$text-muted` | `$color-passive` |
| `$text-headings` | `$color-active` |
| `$text-blockquote` | `$color-passive` |
| `$link` | `$color-link` |
| `$link-active` | `$color-link-active` |
| `$link-visited` | `$color-link-passive` |
| `$table-thead` | `$color-active` |
| `$scrollbar` | `hsl(0, 0%, 80%)` |
| `$line-height` | `1.6` |
| `$margin` | `1.4rem` |

### Options

Options toggle the following features. All the options are prefixed with `$enable-`.

| Option | When set to `true` |
| ------ | ------------------ |
| `$enable-compact-lists` | Brings **lists** closer to the **paragraph** they *immediately* follow |
| `$enable-multiline-wrap` | Applies **border**, **padding**, and **margin** of a **list-item** to all its children |
| `$enable-selection-background` | Applies `$background-selected` to `::selection` |
| `$enable-custom-scrollbar` | Applies `$background-scrollbar` and `$scrollbar` to scrollbar |
| `$enable-custom-colors` | Applies the color variables to the content |
| `$enable-custom-fonts` | Applies the font-family variables to the content |
| `$enable-font-smoothing` | Applies [font smoothing](https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth) to non-code content |
| `$enable-text-inflation` | Applies the [text size adjust](https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust) variable to the content |
| `$enable-media-radius` | Applies the `$media-radius` variable to the images |
| `$enable-block-radius` | Applies the `$block-radius` variable to the codeblocks |
| `$enable-heading-border` | Adds bottom borders to `h1`, `h2` and `h3` |
| `$enable-link-underline` | **Underlines** links |
| `$enable-table-hover` | Adds hover background to **table rows** |
| `$enable-table-stripes` | Adds striped rows to **tables** |
| `$enable-responsive-tables` | Makes overflowing tables scroll horizontally on mobile |
| `$enable-visited-links` | Applies the `$link-visited` color to **visited links** |
| `$enable-active-links` | Applies the `$link-active` color to **focus** and **hover** link states |
| `$enable-variable-fonts` | Applies the `$family-sans-variable` and `$family-code-variable` variables to the content |
| `$enable-smooth-scrolling` | Applies `scroll-behavior: smooth` on all elements |

**Note** that the following options are set to `true` by default
- `$enable-multiline-wrap`
- `$enable-font-smoothing`
- `$enable-text-inflation`
- `$enable-responsive-tables`
- `$enable-smooth-scrolling`
