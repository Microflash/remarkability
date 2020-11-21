# Remarkability

&mdash; A compact CSS library for a pleasant reading experience on the web

[![npm (scoped)](https://img.shields.io/npm/v/@microflash/remarkability)](https://www.npmjs.com/package/@microflash/remarkability)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/Microflash/remarkability)](https://github.com/Microflash/remarkability/releases/latest)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@microflash/remarkability)](https://bundlephobia.com/result?p=@microflash/remarkability)
[![GitHub last commit](https://img.shields.io/github/last-commit/Microflash/remarkability)](https://github.com/Microflash/remarkability/commits/master)
[![GitHub](https://img.shields.io/github/license/Microflash/remarkability)](https://github.com/Microflash/remarkability/blob/master/LICENSE.md)

**Remarkability** provides beautiful and accessible styles for the content generated by the rich-text editors in a CMS or from a markdown file. It comes with sensible defaults that can be customized using [Sass](https://sass-lang.com/).

## Get started

##### Using NPM or Yarn

Add to your project with NPM or Yarn.

```sh
npm install @microflash/remarkability
yarn add @microflash/remarkability
```

This is the recommended way if you want to customize **Remarkability** using Sass.

##### Using CDN

Add one of the following `<link>` elements in the `<head>` of your HTML document.

```html
<link rel="stylesheet" href="https://unpkg.com/@microflash/remarkability">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@microflash/remarkability">
```

> By default, these CDNs will serve the latest published version. Refer to the [unpkg](https://unpkg.com/) / [jsDelivr](https://www.jsdelivr.com/features) docs for other possible ways to get **Remarkability**.

##### Download

You can also download the [latest version](https://github.com/Microflash/remarkability/releases/latest) or [browse the previous releases](https://github.com/Microflash/remarkability/releases) on GitHub.

## Usage

Just add `.remarkability` class to your container to style the elements within.

```html
<article class="remarkability">
  <!-- HTML content -->
</article>
```

By default, **Remarkability** inherits colors and typography from the parent element but you can customize this behavior with [Sass](https://github.com/Microflash/remarkability/tree/master/packages/library/scss).

> **Deprecation of Global variant**
> 
> With v1.0.0, **Remarkability** deprecated the global variant. If needed, you can still build it by setting `$root` variable to `body` using Sass.

### Import what you need

With v1.1.0, **Remarkability** provides you the flexibility to import what you need; you may choose to import the entire `remarkability.scss` file or pick the specific parts. The following parts are available for you to import individually.

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

## Documentation

For more details and examples, check out the [docs](https://r11y.mflash.dev).

## Development

- Execute `yarn start` to bring up the documentation site which contains an example page.
- Use `yarn dist` to generate a CSS build.
- Use `yarn docs` to generate the static version of the documentation.

## License

Licensed under [MIT](./LICENSE.md).

## Acknowledgements

**Remarkability** is built with the generous contributions from the open-source community. It would not have been possible without [wysiwyg.css](https://github.com/jgthms/wysiwyg.css) by [Jeremy Thomas](https://github.com/jgthms), [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) by [Sindre Sorhus](https://github.com/sindresorhus) and the invaluable references on [MDN](https://developer.mozilla.org/en-US/). The typeface used in the logo is [Maragsâ Display](https://www.behance.net/gallery/96690897/Maragsa-a-display-typeface-FREE) by [John David Maza](https://www.behance.net/johndavidmaza). The icons are from [Octicons](https://github.com/primer/octicons), a part of GitHub's [Primer](https://github.com/primer) design system.
