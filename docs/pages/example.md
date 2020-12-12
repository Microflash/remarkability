---
title: Example
date: 2020-11-21
---

Imagine writing a beautifully written blog post in markdown or through a content management system (CMS). Once you have proof-read it and polished it, you run it through a generator (like [marked](https://github.com/markedjs/marked), [remark](https://github.com/remarkjs/remark), etc) or export it through the CMS options and you get an HTML. Imagine this HTML being rendered through the default browser styles, looking drab and lackluster.

That's where **Remarkability** comes into picture. It provides sensible opinions on how an HTML document should look like for a pleasant reading experience in the browser. It adds just-enough character to make your posts look awesome. The document that you're *reading right now* is how it'd look like when you use **Remarkability** with the following options [configured with Sass](https://github.com/Microflash/remarkability/blob/master/docs/scss/_variables.scss) &mdash;

```scss
@use '@microflash/remarkability/scss/variables' with (
  $lead: '.remarkability > p:first-of-type',
  $enable-selection-background: true,
  $enable-custom-colors: true,
  $enable-custom-fonts: true,
  $enable-media-radius: true,
  $enable-block-radius: true,
  $enable-active-links: true,
  $enable-lead-paragraph: true
);
```

# Considerations

To begin with, **Remarkability** includes reasonable defaults for common inline elements, such as *emphasized* or **important** text, [links](#), `code`, <var>variables</var>, <abbr title="abbreviations">abbr</abbr>, <q>short quote</q>, <cite>citations</cite>, <mark>highlighted text</mark>, <kbd>keyboard inputs</kbd>, ~~strikethrough~~, <del>deleted</del> or <ins>inserted</ins> elements, <samp>sample text</samp>, <samp><kbd>sample keyboard input</kbd></samp>, <small>small text</small>, <sub>subscript</sub> or <sup>superscript</sup>.

Besides text, images should also look pretty. Remarkability provides styles for **figure** and *figcaption* to display images.

<figure>
  <img src="https://images.unsplash.com/photo-1521075325181-3889e1af7962?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=683&q=80" alt="Microflash" width="750">
  <figcaption>Photo by <a href="https://unsplash.com/@amichaelbphoto">Michael Baldovinos</a> on <a href="https://unsplash.com/photos/SWssGT_80DE">Unsplash</a></figcaption>
</figure>

<figure>
  <img src="https://github.com/Microflash/mflash.dev/raw/main/static/favicon.svg" alt="Microflash" width="245" height="245">
  <figcaption>A small image</figcaption>
</figure>

It covers other common elements, like an **unordered list** with multiple levels of nesting &mdash;

- It is reasonable to have a list of items.
  - These items can be nested in a list.
    - This depicts hierarchy nicely.
      - However, if the nesting is too deep, it affects readability.
        - Use nested lists with reasonable level of nesting.
          - Else, it may backfire.
- **A list item may start with a paragraph.**  
  
  And can be followed by another paragraph like this one: The man who entered was young, some two-and-twenty at the outside, well-groomed and trimly clad, with something of refinement and delicacy in his bearing. The streaming umbrella which he held in his hand, and his long shining waterproof told of the fierce weather through which he had come.

  And then maybe another paragraph: We heard the door open, a few hurried words, and then quick steps upon the linoleum. Our own door flew open, and a lady, clad in some dark-coloured stuff, with a black veil, entered the room.
- **In technical or statistical texts, your list item can start with an statement** followed by a table containing data to support that statement.  

  | # | Property    | Statistics |
  | - | ----------- | ---------- |
  | 1 | Circulation | 20,000     |
  | 2 | Records     | 14,030     |
- **Or you list item may mention a technical detail** followed by a code sample.  

  ```js
  console.log('Hello, world!')
  ```

  Followed by another paragraph explaining the code sample.
- Finally, your list may contain some items which start with a paragraph, like this one.

  With another paragraph that may be followed by a nested list,
  - Such as this list
  - With mutiple items.

**Remarability** tackles the above usecases with **ordered** lists as well so that

1. Everything looks good by default.
2. A reasonable amount of usecases are handled so you won't have to do a lot of tweaking.
3. If needed, you can customize the look of your document.
4. If needed, you can select or discard the components.

You can have nice looking definition lists as well, like this one &mdash;

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

You can separate sections of your document using a horizontal rule.

---

Or you can put a delicious quote using a `blockquote`.

> Make it easy to read.  
> *&mdash; Roger Black*

> Your quotation can span multiple paragraphs.
> 
> > You can nest  
> > > multiple `blockquote`s.
> 
> You can even embed code samples in the block quotes.
> 
> ```shell
> echo "Hello, world!"
> ```
> 
> And add lists
> - with one or more
> - quotation lines
> 
> ending with some footer text.

## What about headings stacked together?

### Remarkability ensures that stacked headings look good.

#### It takes care of the spacing between them.

##### You can even put some `code` in a heading and that should also look fine.

###### And this works for all levels of headings.

For **tables**, **Remarkability** provides the styles for cells, rows, head, body, and foot elements.

| Song                        | Published |           Artist |
| --------------------------- | :-------: | ---------------: |
| Lovely Day                  |   1977    |     Bill Withers |
| Rolling in the Deep         |   2011    |            Adele |
| Unique                      |   2014    |            Lenka |
| Every Time the Sun Comes Up |   2014    | Sharon Van Etten |

You may have code samples in **code blocks**. They are displayed in a `pre` element.

```java
public class Factorial {
  public static int calculate(int n) {
    return switch (n) {
        case 0, 1 -> 1;
        case 2    -> 2;
        default   -> calculate(n - 1) * n;
    };
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
