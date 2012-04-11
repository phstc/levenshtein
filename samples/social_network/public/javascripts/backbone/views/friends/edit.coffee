class Levenshtein.Views.FriendsEdit extends Backbone.View

  template: _.template "<%= model.get('name') %>"

  tagName: "li"

  render: ->
    $(@el).html(@template(model: @model))
    this
