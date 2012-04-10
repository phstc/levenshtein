app = require('../app')
routes = require('../routes')

describe 'routes', ->
  describe '#index', ->
    it 'should be a function', -> 
      mockReq = null
      mockRes =
        json: (data) ->
          data[0].should.equal("test")
      routes.levenshtein(mockReq, mockRes)
