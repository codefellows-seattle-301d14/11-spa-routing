(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* Done! TODO: Use your DOM skills to reveal only the articles section! */
    $('#about').hide();
    $('#articles').show();
  };

  module.articleController = articleController;
})(window);
