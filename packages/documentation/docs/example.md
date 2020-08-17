# Remarkability in Action

**This very document** is styled using **Remarkability** with the following [configuration](https://github.com/Microflash/remarkability/tree/master/packages/documentation/docs/.vuepress/theme/styles/_variables.scss) &mdash;

```scss
@use '@microflash/remarkability/scss/variables' with (
  $enable-multiline-wrap: true,
  $enable-selection-background: true,
  $enable-custom-colors: true,
  $enable-custom-fonts: true,
  $enable-media-radius: true,
  $enable-block-radius: true,
  $enable-heading-border: true,
  $enable-responsive-tables: true,
  $enable-active-links: true,
  $enable-smooth-scrolling: true
);
```

Remarkability includes reasonable defaults for *emphasized* or **important** text, [links](#), `code`, <abbr title="abbreviations">abbr</abbr>, <q>short quote</q>, <cite>citations</cite>, <mark>highlighted text</mark>, <kbd>keyboard inputs</kbd>, <s>strikethrough</s>, ~~deleted~~ or <ins>inserted</ins> elements, <samp>sample text</samp>, <small>small text</small>, <sub>subscript</sub> or <sup>superscript</sup>.

You can have **unordered lists** with multiple levels of nesting &mdash;

- Such as this list
  - with a nested item
    - containing another nested item
      - and a yet another
        - until it reaches
          - the sixth level.
- A list item can wrap multiple lines.
- Here's an example of a long list item: The man who entered was young, some two-and-twenty at the outside, well-groomed and trimly clad, with something of refinement and delicacy in his bearing. The streaming umbrella which he held in his hand, and his long shining waterproof told of the fierce weather through which he had come.
- A list item can also wrap multiple paragraphs, like this:
  
  I groaned, for I was newly come back from a weary day.

  We heard the door open, a few hurried words, and then quick steps upon the linoleum. Our own door flew open, and a lady, clad in some dark-coloured stuff, with a black veil, entered the room.

Similarly, you can have **ordered lists** &mdash;

1. There are several layers of earth, including
   1. the Crust
      1. the Mantle
         1. the Gutenburg discontinuity
            1. the Outer Core, and
               1. the Inner Core.
2. Gutenburg discontinuity is a boundary between the core and mantle at ~2891 km.
3. The seismic activity goes through an abrupt change at the discontinuity.

And finally, you can also have **definition lists** &mdash;

<dl>
  <dt>Crust</dt>
  <dd>the outermost layer of Earth, ranging from 5–70 km</dd>
  <dt>Mantle</dt>
  <dd>the thickest layer of Earth lying below the crust, extending up to 2890 km</dd>
  <dt>Outer Core</dt>
  <dd>a fluid layer about 2400 km thick lying below the mantle</dd>
  <dt>Inner Core</dt>
  <dd>the innermost layer of Earth with a radius of 1220 km</dd>
</dl>

You can put a horizontal rule as a separator.

---

> You can also put an inspirational quotation in a `blockquote`.
>
> Such a quotation can span several lines and even multiple paragraphs.
> 
> > You can nest  
> > > multiple `blockquote`s.
>
> And add lists
> - with one or more
> - quotation lines
> 
> ending with some footer text.

Besides text, images should also look pretty. Remarkability provides styles for **figure** and *figcaption* to display images.

<figure>
  <img src="https://images.unsplash.com/photo-1521075325181-3889e1af7962?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=683&q=80" alt="Microflash" width="750">
  <figcaption>Photo by <a href="https://unsplash.com/@amichaelbphoto">Michael Baldovinos</a> on <a href="https://unsplash.com/photos/SWssGT_80DE">Unsplash</a></figcaption>
</figure>

<figure>
  <img src="https://github.com/Microflash/mflash.dev/raw/release/static/favicon.svg" alt="Microflash" width="245" height="245">
  <figcaption>A small image</figcaption>
</figure>

**Tables** are also supported with styles for cells, rows, head, body, and foot elements.

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
    return LongStream.rangeClosed(2, num)
      .parallel()
      .mapToObj(BigDecimal::new)
      .reduce(BigDecimal::multiply);
  }
}
```

You can have a **detail** element with a *summary*.

<details>
  <summary>MIT license</summary>
  <p>Copyright &copy; 2019 &mdash; present Naiyer Asif</p>
  <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
  <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
  <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
</details>
