(function() {
  var fs, includeInThisContext, startTime, vm;

  fs = require('fs');

  vm = require('vm');

  includeInThisContext = function(path) {
    var code;
    code = fs.readFileSync(path);
    return vm.runInThisContext(code, path);
  };

  includeInThisContext("" + __dirname + "/Levenshtein.js");

  startTime = new Date().getTime();

  fs.readFile("" + __dirname + "/../assets/word.list.txt", 'utf-8', function(err, data) {
    if (err) {
      console.error("Could not open file: %s", err);
      process.exit(1);
    }
    console.log("aaa");
    return data.split(/\n/).forEach(function(line) {
      if ("causes".levenshteinDistance(line) === 1) console.log(line);
      if (i === (lines.length - 1)) {
        return console.log((new Date().getTime() - startTime) / 1000);
      }
    });
  });

}).call(this);
