var friend = require('../models/friend.js')

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.levenshtein = function(req, res){
  friend.findByNameDistance(req.params.name || "causes", function(friends){
	  res.json(friends);
  });
};
