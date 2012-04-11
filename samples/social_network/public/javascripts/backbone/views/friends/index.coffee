class Levenshtein.Views.FriendsIndex extends Backbone.View

  template: _.template $("#friend_names_template").html()
	
  tagName: "div"

  initialize: ->
    @collection.on('reset', @render, this)
    @collection.on("add", @addFriend, this)

  render: ->
    $(@el).html(@template(collection: @collection))
    this