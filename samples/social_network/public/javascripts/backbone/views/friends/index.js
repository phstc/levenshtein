(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Levenshtein.Views.FriendsIndex = (function(_super) {

    __extends(FriendsIndex, _super);

    function FriendsIndex() {
      this.renderFriend = __bind(this.renderFriend, this);
      FriendsIndex.__super__.constructor.apply(this, arguments);
    }

    FriendsIndex.prototype.tagName = "div";

    FriendsIndex.prototype.initialize = function() {
      return this.collection.on('reset', this.render, this);
    };

    FriendsIndex.prototype.renderFriend = function(model) {
      var friendShow;
      friendShow = new Levenshtein.Views.FriendsShow({
        model: model
      });
      return $(this.el).find("ul").append(friendShow.render().el);
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
