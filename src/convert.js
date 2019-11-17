const unified = require('unified')
const stream = require('unified-stream')
const markdown = require('remark-parse')
const remark2rehype = require('remark-rehype')
const format = require('rehype-format')
const html = require('rehype-stringify')

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(format)
  .use(html)

process.stdin.pipe(stream(processor)).pipe(process.stdout)
