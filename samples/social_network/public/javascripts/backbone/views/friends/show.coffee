class Levenshtein.Views.FriendsShow extends Backbone.View
  template: _.template "<a href=\"/<%= model.get("name") %>\"><%= model.get("name") %></a>"

  tagName: "li"

  render: ->
    $(@el).html @template(model: @model)
    @
