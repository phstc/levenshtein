(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Levenshtein.Collections.Friends = (function(_super) {

    __extends(Friends, _super);

    function Friends() {
      Friends.__super__.constructor.apply(this, arguments);
    }

    Friends.prototype.url = "/api/levenshtein";

    Friends.prototype.model = Levenshtein.Models.Friend;

    Friends.prototype.fetchByName = function(name, options) {
      if (options == null) options = {};
      this.name = name;
      options["url"] = "/api/levenshtein/" + name;
      return this.fetch(options);
    };

    return Friends;

  })(Backbone.Collection);

}).call(this);
