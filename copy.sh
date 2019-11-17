#!/bin/sh

rm -rf docs/index.html
cp src/template.html docs/index.html
sed -i -e '/<!-- markdown -->/r src/markdown.html' docs/index.html
rm -rf src/markdown.html

echo "Done!"
