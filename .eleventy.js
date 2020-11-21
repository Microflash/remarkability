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
    permalinkSymbol: `<svg class="icon" viewBox="0 0 16 16" version="1.1" width="0.75em" height="0.75em" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>`,
    permalinkSpace: false,
    permalinkBefore: true,
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
