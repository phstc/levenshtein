(function() {
  var app, friend, routes;

  require("should");

  app = require('../../app');

  routes = require('../../routes');

  friend = require('../../models/friend.js');

  describe('routes', function() {
    return describe('#levenshtein', function() {
      return it('should return rest', function(done) {
        var mockReq, mockRes;
        mockReq = {
          query: [],
          params: {}
        };
        mockRes = {
          json: function(data) {
            data[0].name.should.equal("cause");
            return done();
          }
        };
        friend.readWordList = function(callback) {
          return callback("cause");
        };
        return routes.levenshtein(mockReq, mockRes);
      });
    });
  });

}).call(this);
