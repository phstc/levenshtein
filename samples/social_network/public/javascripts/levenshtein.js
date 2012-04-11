(function() {

  window.Levenshtein = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function() {
      new Levenshtein.Routers.Friends();
      return Backbone.history.start({
        pushState: true
      });
    }
  };

  $(document).ready(function() {
    Levenshtein.init();
    $("#loading").ajaxComplete(function() {
      return $(this).hide();
    });
    return $("#loading").ajaxSend(function() {
      return $(this).show();
    });
  });

}).call(this);
