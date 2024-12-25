// app/not-found.tsx
'use client';

import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    console.log('Current path:', window.location.pathname);
  }, []);

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <h2 className='text-xl font-bold'>Not Found</h2>
      <p>Could not find the requested resource</p>
      <p className='mt-4'>
        Path: <span id='currentPath'></span>
      </p>
    </div>
  );
}
