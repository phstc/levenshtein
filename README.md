# Levenshtein distance implementation in CoffeeScript

It's an implementation of [Levenshtein distance](http://en.wikipedia.org/wiki/Levenshtein_distance) in [CoffeeScript](http://coffeescript.org).

## How to use it?

### To compile CoffeeScript into JavaScript

    $ coffee --compile src/Levenshtein.coffee

It generates `src/Levenshtein.js`.

### To run in the browser

Firstly include the Levenshtein implementation in your code.

    <script src="Levenshtein.js" type="text/javascript"></script>

Then...

    <script>
      "pablo".levenshteinDistance("fablo"); /* should return 1 (substitution) */
    </script>

### To run the test suite

    $ npm test

## Examples

### examples/WordListReader.coffee

`WordListReader.coffee` finds similar words to `causes` in `samples/word.list.txt`.

    $ coffee examples/WordListReader.coffee

### examples/social_network/models/friend.coffee

#### The problem

Two words are friends if they have a [Levenshtein distance](http://en.wikipedia.org/wiki/Levenshtein_distance) of 1. That is, you can add, remove, or substitute exactly one letter in word X to create word Y. A word's social network  consists of all of its friends, plus all of their friends, and all of their friends' friends, and so on. Write a program to tell us how big the social network for the word "causes" is, using this word list [github.com/causes/puzzles/raw/master/word_friends/word.list](https://github.com/causes/puzzles/raw/master/word_friends/word.list).

#### To run

    $ cd examples/social_network
    $ npm start

## License

This code is licensed under:

MIT License GPL
