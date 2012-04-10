app = require('../app')
routes = require('../routes')

describe 'routes', ->
  describe '#levenshtein', ->
    it 'should return rest', -> 
      mockReq = null
      mockRes =
        json: (data) ->
          data[0].should.equal("test")
      routes.levenshtein(mockReq, mockRes)
