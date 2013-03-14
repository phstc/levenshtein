# Levenshtein distance implementation in CoffeeScript (Javascript)

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
      "pablo".levenshteinDistance("fablo") // should return 1 (substitution)
    </script>

### To run the test suite

    $ npm test

## Samples

### samples/WordListReader.coffee

`WordListReader.coffee` finds similar words in `samples/word.list.txt` to `causes`.

    $ coffee samples/WordListReader.coffee

### samples/social_network/models/friend.coffee

## License

This code is licensed under:

MIT License GPL
