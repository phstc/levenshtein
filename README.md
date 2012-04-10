# Levenshtein distance implementation in CoffeeScript (Javascript)

It's an implementation of [Levenshtein distance](http://en.wikipedia.org/wiki/Levenshtein_distance) in [CoffeeScript](http://coffeescript.org).

## The implementation

```src/Levenshtein.coffee```

## How to use it?

Firstly include the Levenshtein implementation in your code.

    <script src="Levenshtein.js" type="text/javascript"></script>

Then... Run it!

    "pablo".levenshteinDistance "fablo" # should return 1 (substitution)

## Node.js?

Have a look at ```samples/WordListReader.coffee``` and ```samples/social_network/models/friend.coffee```.

## License

This code is licensed under:

MIT License GPL