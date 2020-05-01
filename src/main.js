const fs = require('fs')
const marked = require('marked')
const hljs = require('highlight.js')
const shell = require('shelljs')

const options = {
  highlight: (code, language) => {
    const lang = hljs.getLanguage(language) ? language : 'plaintext'
    return hljs.highlight(lang, code).value
  }
}

fs.readFile('src/content/index.md', 'utf8', (err, data) => {
  if (err) return console.log(err)

  fs.writeFile('.sitecache/generated.html', marked(data, options), err => {
    if (err) return console.log(err)
    shell.sed('-i', /<!-- markdown -->/, shell.cat('.sitecache/generated.html'), 'docs/index.html')
  })
})

shell.cp('src/content/template.html', 'docs/index.html')
shell.cp('.sitecache/index.min.css', 'docs/index.min.css')
shell.cp('src/assets/favicon.ico', 'docs/favicon.ico')
