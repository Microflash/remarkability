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
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap' }]
  ],
  markdown: {
    extractHeaders: [ 'h2', 'h3', 'h4', 'h5', 'h6' ]
  },
  plugins: [
    [
      '@vuepress/search'
    ]
  ]
}
