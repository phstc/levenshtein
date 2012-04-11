class Levenshtein.Views.FriendsIndex extends Backbone.View

  template: _.template "<h2><%= name %> (<%= collection.length %>)</h2><ul><% _.each(collection.models, function(m){ %><li class='friend_item'><a href='/<%= m.get('name') %>'><%= m.get('name') %></a></li><% }); %></ul>"
	
  tagName: "div"

  initialize: ->
    @collection.on('reset', @render, this)
    @collection.on("add", @addFriend, this)

  render: ->
    $(@el).html(@template(name: @collection.name, collection: @collection))
    this
