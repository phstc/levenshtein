(function() {

  Array.prototype.minimum = function() {
    return Math.min(Math.min(this[0], this[1]), this[2]);
  };

  String.prototype.levenshteinDistance = function(str1) {
    var deletion, distance, i, insertion, j, subSize, substitution, _ref, _ref2, _ref3, _ref4;
    distance = new Array();
    for (i = 0, _ref = this.length; 0 <= _ref ? i <= _ref : i >= _ref; 0 <= _ref ? i++ : i--) {
      distance[i] = new Array();
      distance[i][0] = i;
    }
    for (j = 0, _ref2 = str1.length; 0 <= _ref2 ? j <= _ref2 : j >= _ref2; 0 <= _ref2 ? j++ : j--) {
      distance[0][j] = j;
    }
    for (i = 1, _ref3 = this.length; 1 <= _ref3 ? i <= _ref3 : i >= _ref3; 1 <= _ref3 ? i++ : i--) {
      for (j = 1, _ref4 = str1.length; 1 <= _ref4 ? j <= _ref4 : j >= _ref4; 1 <= _ref4 ? j++ : j--) {
        subSize = this.charAt(i - 1) === str1.charAt(j - 1) ? 0 : 1;
        deletion = distance[i - 1][j] + 1;
        insertion = distance[i][j - 1] + 1;
        substitution = distance[i - 1][j - 1] + subSize;
        distance[i][j] = (new Array(deletion, insertion, substitution)).minimum();
      }
    }
    return distance[this.length][str1.length];
  };

}).call(this);
