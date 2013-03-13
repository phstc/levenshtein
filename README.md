# Levenshtein distance implementation in CoffeeScript (Javascript)

It's an implementation of [Levenshtein distance](http://en.wikipedia.org/wiki/Levenshtein_distance) in [CoffeeScript](http://coffeescript.org).

## The implementation

### CoffeeScript

    src/Levenshtein.coffee

## How to use it?

### To compile CoffeeScript into JavaScript

    $ coffee --compile src/Levenshtein.coffee

### To run in the browser

Firstly include the Levenshtein implementation in your code.

    <script src="Levenshtein.js" type="text/javascript"></script>

Then...

    <script>
      "pablo".levenshteinDistance("fablo") // should return 1 (substitution)
    </script>

### To run the test suite

    $ npm test

## Node.js?

Have a look at ```samples/WordListReader.coffee``` and ```samples/social_network/models/friend.coffee```.

## License

This code is licensed under:

MIT License GPL
