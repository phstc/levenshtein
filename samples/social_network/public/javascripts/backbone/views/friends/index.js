(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Levenshtein.Views.FriendsIndex = (function(_super) {

    __extends(FriendsIndex, _super);

    function FriendsIndex() {
      FriendsIndex.__super__.constructor.apply(this, arguments);
    }

    FriendsIndex.prototype.tagName = "div";

    FriendsIndex.prototype.initialize = function() {
      return this.collection.on('reset', this.render, this);
    };

    FriendsIndex.prototype.renderFriend = function(model) {
      console.log("blah!");
      return console.log(model);
    };

    FriendsIndex.prototype.render = function() {
      this.template = this.template || _.template($("#friend_names_template").html());
      $(this.el).html(this.template({
        collection: this.collection
      }));
      this.collection.each(this.renderFriend);
      return this;
    };

    return FriendsIndex;

  })(Backbone.View);

}).call(this);
