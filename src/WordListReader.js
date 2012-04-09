(function() {
  var fs, includeInThisContext, vm;

  fs = require('fs');

  vm = require('vm');

  includeInThisContext = function(path) {
    var code;
    code = fs.readFileSync(path);
    return vm.runInThisContext(code, path);
  };

  includeInThisContext.bind(this);

  includeInThisContext("" + __dirname + "/Levenshtein.js");

  fs.readFile("" + __dirname + "/../assets/word.list.txt", 'utf-8', function(err, data) {
    if (err) {
      console.error("Could not open file: %s", err);
      process.exit(1);
    }
    return console.log("causes".levenshteinDistance("data"));
  });

}).call(this);
