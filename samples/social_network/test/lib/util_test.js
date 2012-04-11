(function() {
  var util;

  require("should");

  util = require('../../lib/util.js');

  util.includeInThisContext("" + __dirname + "/foo.js");

  describe('util', function() {
    return describe('#includeInThisContext', function() {
      return it('should include foo', function() {
        return foo.should.be.a["function"];
      });
    });
  });

}).call(this);
