(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Levenshtein.Views.FriendsShow = (function(_super) {

    __extends(FriendsShow, _super);

    function FriendsShow() {
      FriendsShow.__super__.constructor.apply(this, arguments);
    }

    FriendsShow.prototype.template = _.template('<a href="<%= model.get("name") %>"><%= model.get("name") %></a>');

    FriendsShow.prototype.tagName = "li";

    FriendsShow.prototype.render = function() {
      $(this.el).html(this.template({
        model: this.model
      }));
      return this;
    };

    return FriendsShow;

  })(Backbone.View);

}).call(this);
