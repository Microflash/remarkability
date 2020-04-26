**Remarkability** provides styles that optimize your HTML document for **readability**. It strives to be **accessible** and **customizable**, and provides a [recommended configuration](https://github.com/Microflash/remarkability/tree/master/src/styles/_variables.scss) to get you started.

[![npm (scoped)](https://img.shields.io/npm/v/@microflash/remarkability)](https://www.npmjs.com/package/@microflash/remarkability)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/Microflash/remarkability)](https://github.com/Microflash/remarkability/releases/latest)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@microflash/remarkability)](https://bundlephobia.com/result?p=@microflash/remarkability)
[![GitHub last commit](https://img.shields.io/github/last-commit/Microflash/remarkability)](https://github.com/Microflash/remarkability/commits/master)
[![GitHub](https://img.shields.io/github/license/Microflash/remarkability)](https://github.com/Microflash/remarkability/blob/master/LICENSE.md)

## Get started

#### Using NPM or Yarn

Add to your project with NPM or Yarn.

```sh
npm install @microflash/remarkability
yarn add @microflash/remarkability
```

#### Using CDN

Add one of the following `<link>` elements in the `<head>` of your HTML document.

```html
<link rel="stylesheet" href="https://unpkg.com/@microflash/remarkability">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@microflash/remarkability">
```

> By default, these CDNs will serve the latest published version. Refer to the [unpkg](https://unpkg.com/) / [jsDelivr](https://www.jsdelivr.com/features) docs for other possible ways to get **Remarkability**.

#### Download

Download the [latest version](https://github.com/Microflash/remarkability/releases/latest) or [browse the releases](https://github.com/Microflash/remarkability/releases) on GitHub.

## Usage

Just add `.remarkability` class to your container to style the elements within.

```html
<article class="remarkability">
  <!-- HTML content -->
</article>
```

By default, **Remarkability** inherits colors and typography for the parent element but you can customize this behavior with [Sass](https://github.com/Microflash/remarkability/tree/master/scss).

### Global variant

If you want to use **Remarkability** globally, a [global variant](https://github.com/Microflash/remarkability/tree/master/dist/remarkability.global.min.css) is also available; it doesn't scope the styles under the `.remarkability` class.

## Example

**This very document** is styled using **Remarkability** with a [recommended configuration](https://github.com/Microflash/remarkability/tree/master/src/styles/_variables.scss).

You can have a paragraph with some *emphasized* or **important** text, [links](#), `code`, <abbr title="abbreviations">abbr</abbr>, <q>short quote</q>, <cite>citations</cite>, <mark>highlighted text</mark>, <kbd>keyboard inputs</kbd>, <s>strikethrough</s>, ~~deleted~~ or <ins>inserted</ins> elements, <samp>sample text</samp>, <small>small text</small>, <sub>subscript</sub> or <sup>superscript</sup>.

You can have a **detail** element with a *summary*.

<details>
  <summary>Copyright &copy; 2019 - &infin;</summary>
  <p>&mdash; by <a target="_blank" rel="noopener noreferrer" href="https://mflash.dev">Microflash</a>.</p>
  <p>All Rights Reserved.</p>
</details>

You can have a horizontal rule.

---

You can have **unordered lists** with multiple levels of nesting:
- A simple list
  - with nested items
    - with different bullet point
      - as it goes
        - deeper and deeper
          - till six levels
- with items that can sprawl over multiple lines
- like this long paragraph on the list: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

And **ordered lists**:
<ol>
  <li>Don't pick up the phone
    <ol>
      <li>Pay attention to your dinner
        <ol>
          <li>And your company
            <ol>
              <li>Have some conversation
                <ol>
                  <li>In real world
                    <ol>
                      <li>And enjoy the moment.</li>
                    </ol>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
  </li>
  <li>Take some time off</li>
  <li>And do take naps on time.</li>
</ol>

And even **definition lists**:
<dl>
  <dt>Name</dt>
  <dd>Theresia</dd>
  <dt>Codename</dt>
  <dd>Bumblebee of Bohemia</dd>
  <dt>Organization</dt>
  <dd>Zeroland</dd>
  <dt>Location</dt>
  <dd>Somewhere in Amazon forests</dd>
</dl>

> You can also put some quotes in a `blockquote`.
>
> It can span multiple paragraphs.
> > Multiple `blockquote`s 
> > > can be nested as well.
>
> You can add lists
> - like
> - this
> 
> with some footer text at the end.

You can use **figure** and *figcaption* for images.

<figure>
  <img src="https://images.unsplash.com/photo-1501622285814-b5071de6f0be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Microflash" width="750">
  <figcaption>Photo by <a href="https://unsplash.com/@plqml?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">@plqml</a> on <a href="/s/photos/woman-in-red?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></figcaption>
</figure>

<figure>
  <img src="https://github.com/Microflash/mflash.dev/raw/release/src/favicon.png" alt="Microflash" width="245" height="245">
  <figcaption>A small image</figcaption>
</figure>

**Tables** are supported with styles for cells, rows, head, body, and foot.

| Song                        | Published |           Artist |
| --------------------------- | :-------: | ---------------: |
| Lovely Day                  |   1977    |     Bill Withers |
| Rolling in the Deep         |   2011    |            Adele |
| Unique                      |   2014    |            Lenka |
| Every Time the Sun Comes Up |   2014    | Sharon Van Etten |

**Code Blocks** are displayed in a `pre` element.

```java
import java.math.BigDecimal;
import java.util.Optional;
import java.util.stream.LongStream;

public class Factorial {

  public static Optional<BigDecimal> getFactorial(final int num) {
    return LongStream.rangeClosed(2, num).parallel().mapToObj(BigDecimal::new)
        .reduce(BigDecimal::multiply);
  }
}
```

## Customization

You can easily customize **Remarkability** with [Sass](https://github.com/Microflash/remarkability/tree/master/scss), using **variables** and **options**.

### Variables

Variables control the values of the properties of elements.

| Variable | Default value |
| -------- | ------------- |
| `$family-sans-native` | <pre>-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'</pre> |
| `$family-code-native` | <pre>SFMono-Regular, 'Roboto Mono', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace</pre> |
| `$family-default` | `$family-sans-native` |
| `$family-code` | `$family-code-native` |
| `$family-default-var` | `null` |
| `$family-code-var` | `null` |
| `$weight-bold` | `700` |
| `$weight-headings` | `$weight-bold` |
| `$font-size` | `1rem` |
| `$text-size-adjust` | `100%` |
| `$color-link` | `hsl(209, 100%, 42%)` |
| `$color-monospace` | `hsl(344, 69%, 43%)` |
| `$color-visited-link` | `hsl(293, 100%, 30%)` |
| `$color-hovered-link` | `hsl(209, 99%, 46%)` |
| `$color-muted` | `hsl(0, 0%, 50%)` |
| `$color-default` | `hsl(0, 0%, 20%)` |
| `$color-emphasis` | `hsl(0, 0%, 10%)` |
| `$background-body` | `hsl(0, 0%, 100%)` |
| `$background-code` | `hsl(0, 0%, 95%)` |
| `$background-ins` | `hsl(137, 75%, 67%)` |
| `$background-mark` | `hsl(42, 99%, 70%)` |
| `$background-table` | `hsl(0, 0%, 100%)` |
| `$background-table-even` | `hsl(0, 0%, 98%)` |
| `$background-table-hover` | `hsl(0, 0%, 96%)` |
| `$border` | `hsl(0, 0%, 90%)` |
| `$opacity` | `0.5` |
| `$radius` | `3px` |
| `$image-radius` | `$radius` |
| `$codeblock-radius` | `$radius` |
| `$text` | `$color-default` |
| `$text-code` | `$color-monospace` |
| `$text-strong` | `$color-emphasis` |
| `$text-muted` | `$color-muted` |
| `$text-headings` | `$color-emphasis` |
| `$text-blockquote` | `$color-muted` |
| `$link` | `$color-link` |
| `$link-hover` | `$color-hovered-link` |
| `$link-visited` | `$color-visited-link` |
| `$table-thead` | `$color-emphasis` |
| `$line-height` | `1.6` |
| `$margin` | `1.4rem` |

### Options

Options toggle the following features. By **default**, all options are set to `false`.

| Option | When set to `true` |
| ------ | ------------------ |
| `$closer-lists` | Brings **lists** closer to the **paragraph** they *immediately* follow |
| `$custom-colors` | Applies the **color** variables to the content |
| `$custom-fonts` | Applies the **font-family** variables to the content |
| `$font-smoothing` | Applies [font smoothing](https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth) to non-code content |
| `$text-adjusting` | Applies the [text size adjust](https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust) variables to the content |
| `$round-images` | Applies the `$image-radius` variable to the images |
| `$round-codeblocks` | Applies the `$codeblock-radius` variable to the codeblocks |
| `$heading-borders` | Adds bottom borders to `h1` and `h2` |
| `$show-underline` | **Underlines** links |
| `$table-hover` | Adds hover background to **table rows** |
| `$table-striped` | Adds striped rows to **tables** |
| `$visited-links` | Applies the `$link-visited` color to **visited links** |
| `$hovered-links` | Applies the `$link-hover` color to **focus** and **hover** link states |
| `$variable-fonts` | Applies the `$family-default-var` and `$family-code-var` variables to the content |

## Migrating to v0.7.x

> **Remarkability** v0.7.0 contains some breaking changes over previous versions. If you use Sass, follow this section to migrate without hassle.

#### Renamed variables

| `Previous variable name` v0.6.x | `Current variable name` v0.7.x |
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

**Remarkability** v0.7.x uses [Sass Module System](https://sass-lang.com/blog/the-module-system-is-launched). Take advantage of the new syntax offered by `with`.

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

## Acknowledgements

**Remarkability** is possible because of the following projects and people:

- [wysiwyg.css](https://github.com/jgthms/wysiwyg.css) by [Jeremy Thomas](https://github.com/jgthms)
- [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) by [Sindre Sorhus](https://github.com/sindresorhus)
