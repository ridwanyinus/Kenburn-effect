// public/js/theme.js
(function ($) {
  'use strict';

  function initSlider() {
    if ($('#main_slider').length) {
      $('#main_slider').revolution({
        delay: 9000,
        disableProgressBar: 'off',
        lazyType: 'smart',
        responsiveLevels: [4096, 1199, 992, 767, 540],
      });
    }
  }

  // Wait for revolution plugin to load
  const checkRevolution = setInterval(() => {
    if (typeof $.fn.revolution !== 'undefined') {
      clearInterval(checkRevolution);
      initSlider();
    }
  }, 100);
})(jQuery);
