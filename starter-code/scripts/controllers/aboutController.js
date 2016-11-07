(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: Use your DOM skills to reveal only the about section! */
    $('main section').hide();
    $('#articles').show();
  };

  module.aboutController = aboutController;
})(window);
