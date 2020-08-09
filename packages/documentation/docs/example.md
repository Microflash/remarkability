# Example

**This very document** is styled using **Remarkability** with a [recommended configuration](https://github.com/Microflash/remarkability/tree/master/packages/documentation/docs/.vuepress/theme/styles/_variables.scss).

You can have a paragraph with some *emphasized* or **important** text, [links](#), `code`, <abbr title="abbreviations">abbr</abbr>, <q>short quote</q>, <cite>citations</cite>, <mark>highlighted text</mark>, <kbd>keyboard inputs</kbd>, <s>strikethrough</s>, ~~deleted~~ or <ins>inserted</ins> elements, <samp>sample text</samp>, <small>small text</small>, <sub>subscript</sub> or <sup>superscript</sup>.

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

<!-- <figure>
  <img src="https://images.unsplash.com/photo-1521075325181-3889e1af7962?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=683&q=80" alt="Microflash" width="750">
  <figcaption>Photo by <a href="https://unsplash.com/@amichaelbphoto">Michael Baldovinos</a> on <a href="https://unsplash.com/photos/SWssGT_80DE">Unsplash</a></figcaption>
</figure>

<figure>
  <img src="https://github.com/Microflash/mflash.dev/raw/release/static/favicon.svg" alt="Microflash" width="245" height="245">
  <figcaption>A small image</figcaption>
</figure> -->

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

You can have a **detail** element with a *summary*.

<details>
  <summary>Copyright &copy; 2019 - &infin;</summary>
  <p>&mdash; by <a target="_blank" rel="noopener noreferrer" href="https://mflash.dev">Microflash</a>.</p>
</details>
