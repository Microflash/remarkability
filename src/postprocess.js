const shell = require('shelljs')

shell.rm('-rf', 'docs/index.html')
shell.cp('src/template.html', 'docs/index.html')
shell.sed('-i', /<!-- markdown -->/, shell.cat('src/markdown.html'), 'docs/index.html')
shell.rm('-rf', 'src/markdown.html')
shell.rm('-rf', 'docs/index.css.map')
shell.rm('-rf', 'docs/index.css')
