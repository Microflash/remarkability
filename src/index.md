`remarkability` is a baseline css for HTML generated from markdown. It strives to be accessible with balanced contrast, font sizes and spacing.

[![npm (scoped)](https://img.shields.io/npm/v/@microflash/remarkability)](https://www.npmjs.com/package/@microflash/remarkability)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/Microflash/remarkability)](https://github.com/Microflash/remarkability/releases/latest)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@microflash/remarkability)](https://bundlephobia.com/result?p=@microflash/remarkability)
[![GitHub last commit](https://img.shields.io/github/last-commit/Microflash/remarkability)](https://github.com/Microflash/remarkability/commits/master)
[![GitHub](https://img.shields.io/github/license/Microflash/remarkability)](https://github.com/Microflash/remarkability/blob/master/LICENSE.md)

## Install

Add to your project with NPM/Yarn.

```sh
npm install @microflash/remarkability
yarn add @microflash/remarkability
```

Or download it [manually](https://github.com/Microflash/remarkability/releases/latest).

## Usage

You just need to add `.remarkability` class to your container to style the elements within.

```html
<main class="remarkability">
  <!-- Generated HTML -->
</main>
```

By default, `remarkability` inherits colors and typography but you can customize them with [Sass](https://github.com/Microflash/remarkability/tree/master/scss).

## Example

The content you're reading is styled using `remarkability` with a [recommended](https://github.com/Microflash/remarkability/tree/master/src/_variables.scss) configuration.

You can have a paragraph with *emphasized* or **important** text, [links](#), `code snippets`, <abbr title="abbreviations">abbr</abbr>, <q>short quote</q>, <cite>citations</cite>, <mark>highlighted text</mark>, <kbd>keyboard inputs</kbd>, <s>strikethrough</s>, ~~deleted~~ or <ins>inserted</ins> elements, <samp>sample text</samp>, <small>small text</small>, <sub>subscript</sub> or <sup>superscript</sup> text.

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
- like this long paragraph on the list: This should be interesting. Damage report! The Enterprise computer system is controlled by three primary main processor cores, cross-linked with a redundant melacortz ramistat, fourteen kiloquad interface modules. The Federation's gone; the Borg is everywhere!

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
> 
> - like
> - this
> 
> with some footer text at the end.

You can also use **figure** and *figcaption* for images.

<figure>
  <a href="https://mflash.dev">
    <img src="https://repository-images.githubusercontent.com/194477832/5100bf80-d116-11e9-9cc8-0249620351f3" alt="Microflash" width="1280" height="640">
  </a>
  <figcaption>A large image</figcaption>
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

You can also use **details** with *summary*.

<details>
  <summary>Copyright &copy; 2019 - &infin;</summary>
  <p>&mdash; by <a target="_blank" rel="noopener noreferrer" href="https://mflash.dev">Microflash</a>. All Rights Reserved.</p>
  <p>All content and graphics on this web site are the property of Microflash.</p>
</details>

## Customization

You can easily customize `remarkability` with [Sass](https://github.com/Microflash/remarkability/tree/master/scss), using **variables** and **options**.

### Variables

Variables control the values of the properties of elements.

| Variable | Default value |
| -------- | ------------- |
| `$color-link` | `hsl(209, 100%, 42%)` |
| `$color-monospace` | `hsl(344, 69%, 43%)` |
| `$color-visited-link` | `hsl(293, 100%, 30%)` |
| `$color-text-light` | `hsl(0, 0%, 50%)` |
| `$color-default` | `hsl(0, 0%, 20%)` |
| `$color-emphasis` | `hsl(0, 0%, 10%)` |
| `$background-code` | `hsl(0, 0%, 95%)` |
| `$background-ins` | `hsl(137, 75%, 67%)` |
| `$background-mark` | `hsl(42, 99%, 70%)` |
| `$background-table` | `hsl(0, 0%, 100%)` |
| `$background-table-even` | `hsl(0, 0%, 98%)` |
| `$background-table-hover` | `hsl(0, 0%, 96%)` |
| `$border` | `hsl(0, 0%, 90%)` |
| `$radius` | `3px` |
| `$text` | `$color-default` |
| `$text-code` | `$color-monospace` |
| `$text-strong` | `$color-emphasis` |
| `$text-light` | `$color-text-light` |
| `$text-headings` | `$color-emphasis` |
| `$text-blockquote` | `$color-text-light` |
| `$link` | `$color-link` |
| `$link-hover` | `$color-link` |
| `$link-visited` | `$color-visited-link` |
| `$table-thead` | `$color-emphasis` |
| `$line-height` | `1.6` |
| `$margin` | `1.4rem` |
| `$family-remarkability` | <pre>-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"</pre> |
| `$family-code` | <pre>"Roboto Mono", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", monospace</pre> |
| `$weight-strong` | `700` |
| `$weight-headings` | `700` |
| `$font-size` | `1rem` |
| `$text-size-adjust` | `100%` |

### Options

Options toggle the following features. By **default**, all options are set to `false`.

| Option | When set to `true` |
| ------ | ------------------ |
| `$closer-lists` | Brings **lists** closer to the **paragraph** they *immediately* follow |
| `$custom-colors` | Applies the **color** variables to the content |
| `$custom-fonts` | Applies the **font-family** variables to the content |
| `$font-smoothing` | Applies [font smoothing](https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth) to non-code content |
| `$text-adjusting` | Applies the [text size adjust](https://developer.mozilla.org/en-US/docs/Web/CSS/text-size-adjust) variables to the content |
| `$heading-borders` | Adds bottom borders to `h1` and `h2` |
| `$show-underline` | **Underlines** links |
| `$table-hover` | Adds hover background to **table rows** |
| `$table-striped` | Adds striped rows to **tables** |
| `$visited-links` | Applies the `$link-visited` color to **visited links** |

## Notes

- `remarkability` is based on [wysiwyg.css](https://github.com/jgthms/wysiwyg.css) by [Jeremy Thomas](https://github.com/jgthms) and [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) by [Sindre Sorhus](https://github.com/sindresorhus) with some modifications.
- Those random paragraphs were indeed picked from Star Trek, thanks to [Riker Ipsum](http://www.rikeripsum.com/) by [Jessica Allen](https://twitter.com/jessicaspacekat).
