'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    jQuery: any;
    $: any;
  }
}

export default function SliderInit() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window.jQuery?.fn?.revolution !== 'undefined') {
        clearInterval(interval);
        window.jQuery('#main_slider').revolution({
          delay: 9000,
          disableProgressBar: 'off',
          lazyType: 'smart',
          responsiveLevels: [4096, 1199, 992, 767, 540],
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return null;
}
