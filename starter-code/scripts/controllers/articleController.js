(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* TODO: DONE Use your DOM skills to reveal only the articles section! */
    $('main section').hide();
    $('#articles').show();
  };

  module.articleController = articleController;
})(window);
