# remarkability

> Baseline CSS for Markdown content

[![npm (scoped)](https://img.shields.io/npm/v/@microflash/remarkability)](https://www.npmjs.com/package/@microflash/remarkability)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/Microflash/remarkability)](https://github.com/Microflash/remarkability/releases/latest)
[![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@microflash/remarkability)](https://bundlephobia.com/result?p=@microflash/remarkability)
[![GitHub last commit](https://img.shields.io/github/last-commit/Microflash/remarkability)](https://github.com/Microflash/remarkability/commits/master)
[![GitHub](https://img.shields.io/github/license/Microflash/remarkability)](https://github.com/Microflash/remarkability/blob/master/LICENSE.md)

`remarkability` is a stylesheet for Markdown generated content with a single CSS class.

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

For more details and to see how it looks, check out the [docs](https://microflash.github.io/remarkability/).

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
