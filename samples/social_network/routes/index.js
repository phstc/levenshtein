(function() {
  var friend;

  friend = require('../models/friend.js');

  exports.index = function(req, res) {
    return res.render('index', {
      title: 'Express'
    });
  };

  exports.levenshtein = function(req, res) {
    return friend.findByNameDistance(req.params.name || "causes", function(friends) {
      return res.json(friends);
    });
  };

}).call(this);
