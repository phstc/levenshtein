
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.levenshtein = function(req, res){
  res.json(["test"])
};
