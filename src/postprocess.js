const shell = require('shelljs')

shell.cp('src/content/template.html', 'docs/index.html')
shell.sed('-i', /<!-- markdown -->/, shell.cat('.sitecache/generated.html'), 'docs/index.html')
shell.cp('.sitecache/index.min.css', 'docs/index.min.css')
shell.cp('src/assets/favicon.ico', 'docs/favicon.ico')
