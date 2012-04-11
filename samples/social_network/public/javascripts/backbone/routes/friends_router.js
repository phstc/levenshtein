(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Levenshtein.Routers.Friends = (function(_super) {

    __extends(Friends, _super);

    function Friends() {
      Friends.__super__.constructor.apply(this, arguments);
    }

    Friends.prototype.routes = {
      "": "index",
      ":name": "show"
    };

    Friends.prototype.index = function() {
      return Backbone.history.navigate("/causes", true);
    };

    Friends.prototype.show = function(name) {
      var collection;
      collection = new Levenshtein.Collections.Friends();
      return collection.fetchByName(name, {
        success: function() {
          var view;
          view = new Levenshtein.Views.FriendsIndex({
            collection: collection
          });
          return $("#friends_container").html(view.render().el);
        }
      });
    };

    return Friends;

  })(Backbone.Router);

}).call(this);
