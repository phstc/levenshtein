(function() {
  var friend;

  friend = require('../../models/friend');

  describe('friends', function() {
    return describe('#findByNameDistance', function() {
      return it('should return rest', function() {
        return friend.findByNameDistance("pablo").should.equal("pablo");
      });
    });
  });

}).call(this);
