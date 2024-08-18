'use client';

import React from 'react';
import Lottie from 'lottie-react';
import animationData from './assets/Animation - 1720968817677.json';
console.log('loading');
export default function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f2f2f2' }}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 400, height: 600 }}
      />
    </div>
  );
}