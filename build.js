const shell = require('shelljs')
const fs = require('fs')

shell.rm('-rf', 'dist')
shell.mkdir('dist')

shell.find('scss')
  .filter(entry => entry.match(/\.scss$/))
  .forEach(entry => {
    const target = entry.replaceAll('.scss', '.css').replaceAll('scss/', 'dist/')
    shell.exec(`sass --no-source-map ${entry}:${target}`)
    console.log(`Compiled ${target} from ${entry}`)
  })

const scss = shell.cat('scss/remarkability.scss')
  .replaceAll('@use', '@import')
  .replaceAll('.scss', '.css')
  .trim()
fs.writeFileSync('dist/remarkability.mod.css', scss)
console.log('Generated CSS module')
