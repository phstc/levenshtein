(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Levenshtein.Views.FriendsEdit = (function(_super) {

    __extends(FriendsEdit, _super);

    function FriendsEdit() {
      FriendsEdit.__super__.constructor.apply(this, arguments);
    }

    FriendsEdit.prototype.template = _.template("<%= model.get('name') %>");

    FriendsEdit.prototype.tagName = "li";

    FriendsEdit.prototype.render = function() {
      $(this.el).html(this.template({
        model: this.model
      }));
      return this;
    };

    return FriendsEdit;

  })(Backbone.View);

}).call(this);
