(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO: DONE sUse your DOM skills to reveal only the about section! */
    $('.tab-content').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
