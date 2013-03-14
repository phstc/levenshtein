require "should"

friend = require "../../models/friend"

describe "Friend", ->
  describe "#findByNameDistance", ->
    it "returns the distance to causes", (done) ->
      # stubs readWordList and returns "cause"
      friend.readWordList = (callback) ->
        callback "cause"

      friend.findByNameDistance "causes", (friends) ->
        friends.length.should.equal 1
        friends[0].should.equal "cause"
        done()

