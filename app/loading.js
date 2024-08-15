'use client';

import React from 'react';
import Lottie from 'lottie-react';
import animationData from './assets/Animation - 1720968817677.json';

export default function Loading() {
  return (
    <div className="flex justify-center bg-gray-300 items-center h-screen">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 400, height: 600 }}
      />
    </div>
  );
}