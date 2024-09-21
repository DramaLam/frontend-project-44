# Makefile

install:
	npm ci

brain-games:
	node bin/brain-games.js

lint:
	npx eslint .

publish:
	npm publish --dry-run

link:
	npm link