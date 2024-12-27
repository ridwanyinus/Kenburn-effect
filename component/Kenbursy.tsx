'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const KenburnsSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [{ src: '/assets/img1.jpg', height: 120 }];

  const FADE_DURATION = 1500;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    });
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='container mt-12'>
      <div className='relative  w-full overflow-hidden'>
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`transition-opacity duration-[${FADE_DURATION}ms] ease-in-out`}
            style={{
              opacity: currentImageIndex === index ? 1 : 0,
            }}>
            <div style={{ position: 'relative', width: '100%', height: `${image.height}vh`, overflow: 'hidden' }}>
              <Image src={image.src} objectFit='cover' layout='fill' alt='' loading='eager' className='kenburns-animation' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KenburnsSlider;
