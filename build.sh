#!/bin/sh

npm run dev
rm -rf docs/index.html
cp src/template.html docs/index.html
sed -i -e '/<!-- markdown -->/r src/markdown.html' docs/index.html
rm -rf src/markdown.html
rm -rf docs/index.css.map
rm -rf docs/index.css

echo "Done!"
