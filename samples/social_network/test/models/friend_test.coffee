friend = require('../models/friend.js')

describe 'friends', ->
  describe '#findByNameDistance', ->
    it 'should return rest', -> 
      friend.findByNameDistance("pablo").should.equal("pablo")
