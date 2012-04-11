class Levenshtein.Views.FriendsIndex extends Backbone.View

	
  tagName: "div"

  initialize: ->
    @collection.on('reset', @render, this)


  renderFriend: (model) =>
    friendShow = new Levenshtein.Views.FriendsShow(model: model)
    $(@el).find("ul").append friendShow.render().el

  render: ->
    @template = @template || _.template $("#friend_names_template").html()
    $(@el).html(@template(collection: @collection))
    @collection.each(@renderFriend)
    this