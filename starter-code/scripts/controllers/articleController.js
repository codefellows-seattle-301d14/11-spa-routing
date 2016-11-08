(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    /* DONE: Use your DOM skills to reveal only the articles section! */
    $('.tab-content').hide();
    $('#articles').show();
  };

  module.articleController = articleController;
})(window);
