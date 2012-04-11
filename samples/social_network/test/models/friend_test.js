(function() {
  var friend;

  require("should");

  friend = require('../../models/friend.js');

  describe('friends', function() {
    return describe('#findByNameDistance', function() {
      return it('should return rest', function(done) {
        friend.readWordList = function(callback) {
          return callback("cause");
        };
        return friend.findByNameDistance("causes", function(friends) {
          friends.length.should.equal(1);
          friends[0].should.equal("cause");
          return done();
        });
      });
    });
  });

}).call(this);
