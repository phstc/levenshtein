require("should")
util = require('../../lib/util.js')

describe 'util', ->
  describe '#includeInThisContext', ->
    it 'should include foo', ->
      # TODO Include doesn't work here. ReferenceError: foo is not defined :/
      util.includeInThisContext "#{__dirname}/foo.js"
      foo.should.be.a.function