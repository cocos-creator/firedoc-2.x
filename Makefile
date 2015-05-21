all:
	npm -g i .

version:
	./scripts/versions.js

help:
	./scripts/help.sh

docs: docsghpages
	./lib/cli.js ./lib --markdown

docsghpages:
	-mkdir docs-ghpages
	./lib/cli.js ./lib -o 'docs-ghpages'
	sh scripts/ghpages.sh

deploydocs: version
	./scripts/docs.sh

test:
	npm test

.PHONY: docs clean
