// public/js/theme.js
window.onload = function () {
  (function ($) {
    'use strict';
    /* Main Slider js */
    function main_slider() {
      if ($('#main_slider').length) {
        $('#main_slider').revolution({
          sliderType: 'standard',
          sliderLayout: 'auto',
          delay: 9000,
          disableProgressBar: 'off',
          lazyType: 'smart',
          responsiveLevels: [4096, 1199, 992, 767, 540],
          gridwidth: [1170, 1000, 750, 700, 500],
          gridheight: [1060, 1060, 650, 500, 500],
          fallbacks: {
            simplifyAll: 'off',
            nextSlideOnWindowFocus: 'off',
            disableFocusListener: false,
          },
        });
      }
    }
    /*Function Calls*/
    main_slider();
  })(window.jQuery);
};
