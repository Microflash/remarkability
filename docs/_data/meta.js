const pkg = require('../../package.json')

module.exports = {
  siteName: 'Remarkability',
  siteDescription: pkg.description,
  siteLogo: '/assets/logo.svg',
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
