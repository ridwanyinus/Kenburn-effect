'use client';

import { useEffect } from 'react';

interface RevolutionOptions {
  delay: number;
  disableProgressBar: string;
  lazyType: string;
  responsiveLevels: number[];
  sliderLayout: string;
  sliderType: string;
}

interface RevolutionInstance {
  revolution(options: RevolutionOptions): void;
}

interface JQueryStatic {
  fn: {
    revolution: RevolutionInstance;
  };
  (selector: string): RevolutionInstance;
}

declare global {
  interface Window {
    jQuery: JQueryStatic;
    $: JQueryStatic;
  }
}

export default function SliderInit() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window.jQuery?.fn?.revolution !== 'undefined') {
        clearInterval(interval);
        window.jQuery('#main_slider').revolution({
          sliderType: 'standard',
          sliderLayout: 'auto',
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
