module.exports = {
  title: 'Remarkability',
  description: 'A compact CSS library for a pleasant reading experience on the web',
  head: [
    ['meta', { charset: 'UTF-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }],
    ['meta', { name: 'author', content: 'Naiyer Asif' }],
    ['meta', { name: 'theme-color', content: '#101015' }],
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['link', { rel: 'mask-icon', href: '/mask-icon.svg', color: '#ffffff' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap' }]
  ],
  markdown: {
    extractHeaders: [ 'h2', 'h3', 'h4', 'h5', 'h6' ]
  },
  themeConfig: {
    logo: 'logo.svg',
    shields: [
      {
        href: 'https://www.npmjs.com/package/@microflash/remarkability',
        src: 'https://img.shields.io/npm/v/@microflash/remarkability',
        alt: 'npm (scoped)'
      },
      {
        href: 'https://github.com/Microflash/remarkability/releases/latest',
        src: 'https://img.shields.io/github/v/release/Microflash/remarkability',
        alt: 'GitHub release (latest by date)'
      },
      {
        href: 'https://bundlephobia.com/result?p=@microflash/remarkability',
        src: 'https://img.shields.io/bundlephobia/minzip/@microflash/remarkability',
        alt: 'npm bundle size (scoped)'
      },
      {
        href: 'https://github.com/Microflash/remarkability/commits/master',
        src: 'https://img.shields.io/github/last-commit/Microflash/remarkability',
        alt: 'GitHub last commit'
      },
      {
        href: 'https://github.com/Microflash/remarkability/blob/master/LICENSE.md',
        src: 'https://img.shields.io/github/license/Microflash/remarkability',
        alt: 'License'
      }
    ]
  }
}
