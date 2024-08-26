'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function PriceSlider() {
  const [minValue, setMinValue] = useState(5);
  const [maxValue, setMaxValue] = useState(18);

  const minPrice = 0;
  const maxPrice = 80;

  const handleMinChange = (event) => {
    const value = Math.min(Number(event.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (event) => {
    const value = Math.max(Number(event.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div className="flex flex-col items-center space-y-4  mt-4 mr-4 mb-8">
      <h3 className="text-lg font-semibold text-[#365758]">Preis</h3>
      <div className="relative w-40">
        {/* Background and active range */}
        <div className="absolute w-full h-1 bg-[#AEE5E5] rounded-full top-1/2 -translate-y-1/2"></div>
        <div
          className="absolute h-1 bg-[#62C3C6] rounded-full top-1/2 -translate-y-1/2"
          style={{
            left: `${(minValue / maxPrice) * 100}%`,
            right: `${100 - (maxValue / maxPrice) * 100}%`,
          }}
        ></div>

        {/* Range sliders */}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full h-1 opacity-0 pointer-events-none z-10"
          style={{
            pointerEvents: 'auto',
          }}
        />
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full h-1 opacity-0 pointer-events-none z-10"
          style={{
            pointerEvents: 'auto',
          }}
        />

        {/* Custom leaf thumb elements */}
        <div
          className="absolute w-6 h-6 top-1/2 transform -translate-y-1/2"
          style={{ left: `${(minValue / maxPrice) * 100}%` }}
        >
          <Image
            src='leaf.svg'
            width={15}
            height={15}
            alt="Leaf handle"
            className="transform -translate-x-1/2"
          />
        </div>
        <div
          className="absolute w-6 h-6 top-1/2 transform -translate-y-1/2"
          style={{ left: `${(maxValue / maxPrice) * 100}%` }}
        >
          <Image
            src='/leaf.svg'
            width={15}
            height={15}
            alt="Leaf handle"
            className="transform -translate-x-1/2"
          />
        </div>
      </div>
      <div className="flex justify-between  text-sm text-gray-600">
        <span className="px-4 py-1 bg-gray-100 rounded-md shadow-sm">{minValue} €</span>
        <span className=' font-bold pl-3 pr-3 text-2xl'>-</span>
        <span className="px-3 py-1 bg-gray-100 rounded-md shadow-sm">{maxValue} €</span>
      </div>
    </div>
  );
}
