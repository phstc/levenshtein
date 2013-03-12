require "should"

friend = require "../../models/friend.js"

describe "friends", ->
  describe "#findByNameDistance", ->
    it "returns the distance", (done) ->
      friend.readWordList = (callback) ->
        callback "cause"
      friend.findByNameDistance "causes", (friends) ->
        friends.length.should.equal 1
        friends[0].should.equal "cause"
        done()
