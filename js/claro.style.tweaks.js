(function ($, Drupal) {

  Drupal.behaviors.claro_style_tweaks = {
    attach: function (context, settings) {
      $('.claro-details summary').on('click', function () {
        var id = $(this).parent().find('.focal-point-wrapper');
        $(id).find('.focal-point-indicator').removeOnce('focal-point-indicator');
        Drupal.behaviors.focalPointIndicator.attach($(id));

      });
    }
  };

})(jQuery, Drupal);
