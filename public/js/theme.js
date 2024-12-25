// public/js/theme.js
window.onload = function () {
  (function ($) {
    'use strict';
    /* Main Slider js */
    function main_slider() {
      if ($('#main_slider').length) {
        $('#main_slider').revolution({
          delay: 9000,
          disableProgressBar: 'on',
          lazyType: 'smart',
          responsiveLevels: [4096, 1199, 992, 767, 540],
        });
      }
    }
    /*Function Calls*/
    main_slider();
  })(window.jQuery);
};
