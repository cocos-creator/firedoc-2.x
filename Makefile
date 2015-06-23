all:
	npm -g i .

version:
	./scripts/versions.js

help:
	./scripts/help.sh

docs: docsghpages
	./lib/cli.js ./lib --markdown

docsghpages:
	-rm -rf ./docs-ghpages
	-mkdir -p ./docs-ghpages/en
	-mkdir -p ./docs-ghpages/zh
	./lib/cli.js ./lib --en -o 'docs-ghpages/en'
	./lib/cli.js ./lib --zh -o 'docs-ghpages/zh'
	cp -r ./docs-ghpages/en/* ./docs-ghpages/
	sh ./scripts/ghpages.sh

notab:
	./lib/cli.js ./lib --en -o 'docs-ghpages/en' --theme '../firedoc-theme-notab/'
	sh ./scripts/ghpages.sh

deploydocs: version
	./scripts/docs.sh

test:
	NODE_ENV=test mocha ./test/test-*.js

.PHONY: docs clean test
