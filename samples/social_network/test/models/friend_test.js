(function() {
  var causesFriends, friend;

  require("should");

  friend = require('../../models/friend.js');

  causesFriends = ["camuses", "carses", "cases", "caules", "cause", "caused", "causen", "causer", "causers", "causey", "causeys", "cauves", "cayuses", "chuses", "clauses", "cruses", "hauses", "pauses"];

  describe('friends', function() {
    return describe('#findByNameDistance', function() {
      return it('should return rest', function(done) {
        return friend.findByNameDistance("causes", function(friends) {
          friends.length.should.equal(18);
          return done();
        });
      });
    });
  });

}).call(this);
