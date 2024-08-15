'use client';

import React from 'react';
import Lottie from 'lottie-react';
import animationData from './assets/Animation - 1720968817677.json';

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
}