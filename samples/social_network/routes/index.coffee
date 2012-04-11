friend = require '../models/friend.js'

exports.index = (req, res) ->
  res.render 'index', title: 'Express'

exports.levenshtein = (req, res) ->
  friend.findByNameDistance req.params.name || "causes", (friends) ->
    res.json friends.map (name) ->
      name: name