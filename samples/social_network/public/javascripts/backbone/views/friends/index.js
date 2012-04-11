(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Levenshtein.Views.FriendsIndex = (function(_super) {

    __extends(FriendsIndex, _super);

    function FriendsIndex() {
      FriendsIndex.__super__.constructor.apply(this, arguments);
    }

    FriendsIndex.prototype.template = _.template("<h2><%= name %> (<%= collection.length %>)</h2><ul><% _.each(collection.models, function(m){ %><li class='friend_item'><a href='/<%= m.get('name') %>'><%= m.get('name') %></a></li><% }); %></ul>");

    FriendsIndex.prototype.tagName = "div";

    FriendsIndex.prototype.initialize = function() {
      this.collection.on('reset', this.render, this);
      return this.collection.on("add", this.addFriend, this);
    };

    FriendsIndex.prototype.render = function() {
      $(this.el).html(this.template({
        name: this.collection.name,
        collection: this.collection
      }));
      return this;
    };

    return FriendsIndex;

  })(Backbone.View);

}).call(this);
