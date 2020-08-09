# Customization

You can easily customize **Remarkability** with [Sass](https://github.com/Microflash/remarkability/tree/master/scss), using **variables** and **options**.

### Variables

Variables control the values of the properties of elements.

| Variable | Default value |
| -------- | ------------- |
| `$family-sans-native` | <pre>-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'</pre> |
| `$family-code-native` | <pre>SFMono-Regular, 'Roboto Mono', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace</pre> |
| `$family-base` | `$family-sans-native` |
| `$family-code` | `$family-code-native` |
| `$family-base-variable` | `null` |
| `$family-code-variable` | `null` |
| `$font-families` | <pre>( 'base': $family-base $family-base-variable, 'code': $family-code $family-code-variable )</pre> |
| `$weight-normal` | `400` |
| `$weight-bold` | `700` |
| `$weight-headings` | `$weight-bold` |
| `$font-size-base` | `1rem` |
| `$font-size-code` | `0.9em` |
| `$text-size-adjust` | `100%` |
| `$color-base` | `hsl(0, 1%, 14%)` |
| `$color-vibrant` | `hsl(0, 0%, 9%)` |
| `$color-muted` | `hsl(0, 1%, 38%)` |
| `$color-link` | `hsl(209, 100%, 42%)` |
| `$color-link-hovered` | `hsl(209, 99%, 46%)` |
| `$color-link-visited` | `hsl(293, 100%, 30%)` |
| `$color-code` | `hsl(0, 58%, 46%)` |
| `$background-body` | `hsl(0, 0%, 100%)` |
| `$background-code` | `hsl(0, 5%, 96%)` |
| `$background-ins` | `hsl(137, 75%, 67%)` |
| `$background-mark` | `hsl(42, 99%, 70%)` |
| `$background-table` | `hsl(0, 0%, 100%)` |
| `$background-table-even` | `hsl(0, 3%, 98%)` |
| `$background-table-hover` | `hsl(0, 5%, 96%)` |
| `$background-selected` | `hsla(209, 100%, 42%, 0.25)` |
| `$background-scrollbar` | `hsl(0, 5%, 96%)` |
| `$border-color` | `hsl(0, 0%, 91%)` |
| `$opacity` | `0.5` |
| `$radius` | `3px` |
| `$media-radius` | `$radius` |
| `$block-radius` | `$radius` |
| `$text` | `$color-base` |
| `$text-code` | `$color-code` |
| `$text-bold` | `$color-vibrant` |
| `$text-muted` | `$color-muted` |
| `$text-headings` | `$color-vibrant` |
| `$text-blockquote` | `$color-muted` |
| `$link` | `$color-link` |
| `$link-hover` | `$color-link-hovered` |
| `$link-visited` | `$color-link-visited` |
| `$table-thead` | `$color-vibrant` |
| `$scrollbar` | `hsl(0, 0%, 80%)` |
| `$line-height` | `1.6` |
| `$margin` | `1.4rem` |

### Options

Options toggle the following features. By **default**, all options are set to `false`, except for `$smooth-fonts` and `$adjust-text`.

| Option | When set to `true` |
| ------ | ------------------ |
| `$compact-lists` | Brings **lists** closer to the **paragraph** they *immediately* follow |
| `$multiline-wrap` | Applies **border**, **padding**, and **margin** of a **list-item** to all its children |
| `$custom-selection` | Applies `$background-selected` to `::selection` |
| `$custom-scrollbar` | Applies `$background-scrollbar` and `$scrollbar` to scrollbar |
| `$custom-colors` | Applies the **color** variables to the content |
| `$custom-fonts` | Applies the **font-family** variables to the content |
| `$smooth-fonts` | Applies [font smoothing](https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth) to non-code content |
| `$adjust-text` | Applies the [text size adjust](https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust) variables to the content |
| `$round-media` | Applies the `$media-radius` variable to the images |
| `$round-blocks` | Applies the `$block-radius` variable to the codeblocks |
| `$heading-borders` | Adds bottom borders to `h1`, `h2` and `h3` |
| `$show-underline` | **Underlines** links |
| `$table-hover` | Adds hover background to **table rows** |
| `$table-striped` | Adds striped rows to **tables** |
| `$responsive-tables` | Makes overflowing tables horizontally scrollable |
| `$visited-links` | Applies the `$link-visited` color to **visited links** |
| `$hovered-links` | Applies the `$link-hover` color to **focus** and **hover** link states |
| `$variable-fonts` | Applies the `$family-base-variable` and `$family-code-variable` variables to the content |
| `$scroll-smoothly` | Applies `scroll-behavior: smooth` on all elements |
