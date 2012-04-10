(function() {
  var app, routes;

  app = require('../../app');

  routes = require('../../routes');

  describe('routes', function() {
    return describe('#levenshtein', function() {
      return it('should return rest', function() {
        var mockReq, mockRes;
        mockReq = null;
        mockRes = {
          json: function(data) {
            return data[0].should.equal("test");
          }
        };
        return routes.levenshtein(mockReq, mockRes);
      });
    });
  });

}).call(this);
