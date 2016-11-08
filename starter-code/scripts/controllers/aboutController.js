(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* DONE: Use your DOM skills to reveal only the about section! */
    document.getElementsByTagName('section').hide();
    document.getElementById('about').show();
  };

  module.aboutController = aboutController;
})(window);
