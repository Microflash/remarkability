# remarkability

> Baseline CSS for Markdown content

`remarkability` is based on [wysiwyg.css](https://github.com/jgthms/wysiwyg.css) by [Jeremy Thomas](https://github.com/jgthms) and [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) by [Sindre Sorhus](https://github.com/sindresorhus) with some modifications.

## Install

Add to your project with NPM/Yarn.

```sh
npm install @microflash/remarkability
yarn add @microflash/remarkability
```

Or download it [manually](https://github.com/Microflash/remarkability/releases).

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
