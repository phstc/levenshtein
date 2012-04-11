require("should")
util = require('../../lib/util.js')

util.includeInThisContext "#{__dirname}/foo.js"

describe 'util', ->
  describe '#includeInThisContext', ->      
    it 'should include foo', ->
      foo.should.be.a.function