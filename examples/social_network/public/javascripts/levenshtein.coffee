window.Levenshtein =
  Models:       {}
  Collections:  {}
  Views:        {}
  Routers:      {}
  init: ->
    new Levenshtein.Routers.Friends
    Backbone.history.start pushState: true

$ ->
  Levenshtein.init()
  $("#loading").ajaxComplete ->
    $(this).hide()

  $("#loading").ajaxSend ->
    $(this).show()
