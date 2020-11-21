const fs = require('fs')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')
const slugify = require('slugify')
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const pkgVersion = require('./package.json').version

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addWatchTarget('./docs/scss/')
  eleventyConfig.addPassthroughCopy('./docs/css/')
  eleventyConfig.addPassthroughCopy('./docs/assets/')
  eleventyConfig.addPassthroughCopy('./docs/favicon.ico')

  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`)
  eleventyConfig.addShortcode('pkgVersion', () => `${pkgVersion}`)

  eleventyConfig.addFilter('slug', str => {
    if (!str) return

    return slugify(str, {
      lower: true,
      replacement: '-',
      remove: /[*+~·,()'"`´%!?¿:@\/]/g
    })
  })

  const markdownLibrary = markdownIt({ html: true }).use(markdownItAnchor, {
    permalink: true,
    permalinkClass: 'citation',
    permalinkSymbol: '#',
    permalinkSpace: false,
    level: [1, 2, 3],
    slugify: s => s.trim().toLowerCase().replace(/[\s+~\/]/g, '-').replace(/[().`,%·'"!?¿:@*]/g, '')
  })

  eleventyConfig.setLibrary('md', markdownLibrary)

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {
        bs.addMiddleware('*', (req, res) => {
          const content_404 = fs.readFileSync('404.html')
          res.write(content_404)
          res.writeHead(404)
          res.end()
        })
      }
    }
  })

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'docs',
      output: 'public'
    }
  }
}
