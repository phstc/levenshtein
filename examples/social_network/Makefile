TESTS = $(shell find test -name "*test.coffee")
COFFEE_ASSETS = $(shell find public/javascripts -name "*.coffee")

test: test-unit

server: compile-assets run-server

run-server:
	coffee app.coffee

compile-assets:
	coffee -c $(COFFEE_ASSETS)

test-unit:
	./node_modules/.bin/mocha $(TESTS) --reporter list --compilers coffee:coffee-script

.PHONY: test server
