require("should")

app = require('../../app')
routes = require('../../routes')

friend = require('../../models/friend.js')

describe 'routes', ->
  describe '#levenshtein', ->
    it 'should return rest', (done) -> 
      mockReq = 
        query: [],
        params: {}
      mockRes =
        json: (data) ->
          data[0].name.should.equal("cause")
          done()
      friend.readWordList = (callback) ->
        callback "cause"
      routes.levenshtein(mockReq, mockRes)
