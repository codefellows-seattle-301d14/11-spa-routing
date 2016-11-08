(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    /* TODO DONE: Use your DOM skills to reveal only the about section! */
    $('.tab-content').hide();
    $('#about').fadeIn();
    console.log('about controller ran');
  };

  module.aboutController = aboutController;
})(window);
