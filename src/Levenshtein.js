(function() {
  var _this = this;

  this.minimum = function(a, b, c) {
    return Math.min(Math.min(a, b), c);
  };

  this.levenshteinDistance = function(str1, str2) {
    var deletion, distance, i, insertion, j, substitution, _ref, _ref2, _ref3, _ref4, _ref5;
    distance = new Array();
    for (i = 0, _ref = str1.length; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
      distance[i] = new Array();
      distance[i][0] = i;
    }
    for (j = 0, _ref2 = str2.length; 0 <= _ref2 ? j <= _ref2 : j >= _ref2; 0 <= _ref2 ? j++ : j--) {
      distance[0][j] = j;
    }
    for (i = 1, _ref3 = str1.length; 1 <= _ref3 ? i <= _ref3 : i >= _ref3; 1 <= _ref3 ? i++ : i--) {
      for (j = 1, _ref4 = str2.length; 1 <= _ref4 ? j <= _ref4 : j >= _ref4; 1 <= _ref4 ? j++ : j--) {
        deletion = distance[i - 1][j] + 1;
        insertion = distance[i][j - 1] + 1;
        substitution = distance[i - 1][j - 1] + ((_ref5 = str1.charAt(i - 1) === str2.charAt(j - 1)) != null ? _ref5 : {
          0: 1
        });
        distance[i][j] = minimum(deletion, insertion, substitution);
      }
    }
    return distance[str1.length][str2.length];
  };

}).call(this);
