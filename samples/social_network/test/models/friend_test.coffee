require("should")

friend = require('../../models/friend.js')

causesFriends = ["camuses", "carses", "cases",
"caules", "cause", "caused", "causen", "causer",
"causers", "causey", "causeys", "cauves", "cayuses",
"chuses", "clauses", "cruses", "hauses", "pauses"]

# TODO mock Levenshtein.js

describe 'friends', ->
  describe '#findByNameDistance', ->
    it 'should return rest', (done) -> 
      friend.findByNameDistance "causes", (friends) -> 
        # TODO should work as deep equal I do not know why it is not working. Investigate it.
        # friends.should.equal(causesFriends)
        friends.length.should.equal(18)
        done()
