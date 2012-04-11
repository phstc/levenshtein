(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Levenshtein.Models.Friend = (function(_super) {

    __extends(Friend, _super);

    function Friend() {
      Friend.__super__.constructor.apply(this, arguments);
    }

    Friend.prototype.urlRoot = "/levenshtein";

    return Friend;

  })(Backbone.Model);

}).call(this);
