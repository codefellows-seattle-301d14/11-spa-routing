(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* DONE: Use your DOM skills to reveal only the articles section! */
    document.getElementsByTagName('section').hide();
    document.getElementById('articles').show();
  };

  module.articleController = articleController;
})(window);
