fs = require 'fs'
util = require "#{__dirname}/../lib/util"

util.includeInThisContext "#{__dirname}/../../../src/Levenshtein.js"

exports.findByNameDistance = (name, callback) ->
  fs.readFile "#{__dirname}/../../word.list.txt", 'utf-8', (err, data) ->
    if err
      console.error "Could not open file: %s", err
      process.exit 1
    friends = new Array()
    data.split(/\n/).forEach (line, i, arr) ->
      if name.levenshteinDistance(line) == 1 
        friends.push line
      if i == (arr.length - 1)
        callback(friends)
