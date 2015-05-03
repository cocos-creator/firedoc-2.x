all:
	npm -g i .

version:
	./scripts/versions.js

help:
	./scripts/help.sh

docs:
	./lib/cli.js ./lib --markdown && git commit -a -m 'docs: updated automatically'

deploydocs: version
	./scripts/docs.sh

test:
	npm test

.PHONY: docs clean
