class Levenshtein.Routers.Friends extends Backbone.Router
  routes:
    "": "index"
    ":name" : "show"

  index: ->
    Backbone.history.navigate "/causes", true

  show: (name) ->
    collection = new Levenshtein.Collections.Friends()
    collection.fetchByName name,
      success: ->
        view = new Levenshtein.Views.FriendsIndex collection: collection
        $("#friends_container").html view.render().el

