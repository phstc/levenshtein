(function() {
  var fs, util;

  fs = require('fs');

  util = require("" + __dirname + "/../lib/util");

  util.includeInThisContext("" + __dirname + "/../../../src/Levenshtein.js");

  exports.findByNameDistance = function(name, callback) {
    return fs.readFile("" + __dirname + "/../../word.list.txt", 'utf-8', function(err, data) {
      var friends;
      if (err) {
        console.error("Could not open file: %s", err);
        process.exit(1);
      }
      friends = new Array();
      return data.split(/\n/).forEach(function(line, i, arr) {
        if (name.levenshteinDistance(line) === 1) friends.push(line);
        if (i === (arr.length - 1)) return callback(friends);
      });
    });
  };

}).call(this);
