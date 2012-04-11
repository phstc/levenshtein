(function() {
  var app, routes;

  require("should");

  app = require('../../app');

  routes = require('../../routes');

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
            data.length.should.equal(18);
            console.log(data);
            return done();
          }
        };
        return routes.levenshtein(mockReq, mockRes);
      });
    });
  });

}).call(this);
