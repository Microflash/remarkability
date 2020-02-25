# remarkability

> Baseline CSS for Markdown content

[![npm (scoped)](https://img.shields.io/npm/v/@microflash/remarkability)](https://www.npmjs.com/package/@microflash/remarkability)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/Microflash/remarkability)](https://github.com/Microflash/remarkability/releases/latest)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@microflash/remarkability)](https://bundlephobia.com/result?p=@microflash/remarkability)
[![GitHub last commit](https://img.shields.io/github/last-commit/Microflash/remarkability)](https://github.com/Microflash/remarkability/commits/master)
[![GitHub](https://img.shields.io/github/license/Microflash/remarkability)](https://github.com/Microflash/remarkability/blob/master/LICENSE.md)

`remarkability` is a stylesheet for HTML generated by a Markdown processor (like [remark](https://remark.js.org/)). It strives to be accessible and customizable, and provides a [recommended configuration](./src/_variables.scss) to get you started.

## Get started

#### Using NPM or Yarn

Add to your project with NPM/Yarn.

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

> Note that these URLs will pull the latest version of `remarkability`. Refer to [unpkg](https://unpkg.com/) / [jsDelivr](https://www.jsdelivr.com/features) docs for other possible ways to pull `remarkability`.

#### Download

Download the [latest version](https://github.com/Microflash/remarkability/releases/latest) or [browse the releases](https://github.com/Microflash/remarkability/releases) on GitHub.

## Usage

You just need to add `.remarkability` class to your container to style the elements within.

```html
<main class="remarkability">
  <!-- Generated HTML -->
</main>
```

For more details and examples, check out the [docs](https://mflash.dev/remarkability/).

## Development

`bash` is required for development.

1.  Edit the SCSS files in [scss](./scss) directory.
2.  Execute `source build.sh` to build the assets and docs.

## License

Licensed under [MIT](./LICENSE.md).

## Acknowledgements

`remarkability` is possible because of the following projects and people:

- [wysiwyg.css](https://github.com/jgthms/wysiwyg.css) by [Jeremy Thomas](https://github.com/jgthms)
- [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) by [Sindre Sorhus](https://github.com/sindresorhus)
