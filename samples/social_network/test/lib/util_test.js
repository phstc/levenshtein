(function() {
  var util;

  require("should");

  util = require('../../lib/util.js');

  describe('util', function() {
    return describe('#includeInThisContext', function() {
      return it('should include foo', function() {
        util.includeInThisContext("" + __dirname + "/foo.js");
        return foo.should.be.a["function"];
      });
    });
  });

}).call(this);
