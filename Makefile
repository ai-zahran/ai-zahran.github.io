.DEFAULT_GOAL := help
.PHONY: help install dev build preview check clean reinstall

## help: list the available targets
help:
	@echo "Usage: make <target>"
	@echo
	@grep -E '^## [a-z-]+:' $(MAKEFILE_LIST) \
		| sed -E 's/^## ([a-z-]+): */\1\t/' \
		| awk -F '\t' '{ printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2 }'

## install: install dependencies
install: node_modules

# Re-runs only when the manifests are newer than the installed tree.
node_modules: package.json package-lock.json
	npm install
	@touch node_modules

## dev: run the dev server at http://localhost:4321
dev: node_modules
	npm run dev

## build: build the production site into dist/
build: node_modules
	npm run build

## preview: serve the built site — run `make build` first
preview: node_modules
	npm run preview

## check: type-check the project; must stay at zero errors
check: node_modules
	npm run check

## clean: remove build output and caches
clean:
	rm -rf dist .astro

## reinstall: clean, drop node_modules, and install from the lockfile
reinstall: clean
	rm -rf node_modules
	npm ci
