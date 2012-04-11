require("should")

app = require('../../app')
routes = require('../../routes')

# TODO See TODOs on friend_test.coffee
describe 'routes', ->
  describe '#levenshtein', ->
    it 'should return rest', (done) -> 
      mockReq = 
        query: [],
        params: {}
      mockRes =
        json: (data) ->
          data.length.should.equal(18)
          done()
      routes.levenshtein(mockReq, mockRes)
