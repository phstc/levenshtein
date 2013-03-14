class Levenshtein.Collections.Friends extends Backbone.Collection
  url: "/api/levenshtein"

  model: Levenshtein.Models.Friend

  fetchByName: (name, options={}) ->
    this.name = name
    options["url"] = "/api/levenshtein/#{name}"
    this.fetch options
