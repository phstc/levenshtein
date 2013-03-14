require "should"

app = require "../../app"
routes = require "../../routes"
friend = require "../../models/friend"

describe "Routes", ->
  describe "#levenshtein", ->
    it "returns rest", (done) ->
      mockReq = query: [], params: {}
      mockRes =
        json: (data) ->
          data[0].name.should.equal "cause"
          done()

      # stubs readWordList and returns "cause"
      friend.readWordList = (callback) ->
        callback "cause"

      routes.levenshtein mockReq, mockRes
