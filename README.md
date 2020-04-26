# Remarkability

> Baseline CSS for text-heavy HTML documents

[![npm (scoped)](https://img.shields.io/npm/v/@microflash/remarkability)](https://www.npmjs.com/package/@microflash/remarkability)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/Microflash/remarkability)](https://github.com/Microflash/remarkability/releases/latest)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@microflash/remarkability)](https://bundlephobia.com/result?p=@microflash/remarkability)
[![GitHub last commit](https://img.shields.io/github/last-commit/Microflash/remarkability)](https://github.com/Microflash/remarkability/commits/master)
[![GitHub](https://img.shields.io/github/license/Microflash/remarkability)](https://github.com/Microflash/remarkability/blob/master/LICENSE.md)

**Remarkability** is geared to be **readable**, **accessible** and **customizable**. It provides a [recommended configuration](./src/styles/_variables.scss) to get you started.

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

For more details and examples, check out the [docs](https://mflash.dev/remarkability/).

## Development

- Execute `yarn dev` to generate the assets and docs.
- Execute `yarn build` to generate the distribution.

## License

Licensed under [MIT](./LICENSE.md).

## Acknowledgements

**Remarkability** is possible thanks to the following projects and people &ndash;

- [wysiwyg.css](https://github.com/jgthms/wysiwyg.css) by [Jeremy Thomas](https://github.com/jgthms)
- [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) by [Sindre Sorhus](https://github.com/sindresorhus)
