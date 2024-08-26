
'use client';

import React, { useState } from 'react';
import { Manrope, Sora } from "next/font/google";
const sora = Sora({ subsets: ["latin"] });

const options = [
  { label: 'ADREXpharma', value: 'adrexpharma' },
  { label: 'Aurora', value: 'aurora' },
  { label: 'Avaay', value: 'avaay' },
  { label: 'Bedrocan', value: 'bedrocan' },
  { label: 'Cannamedical', value: 'cannamedical' },
];

export default function CustomCheckbox() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (value) => {
    setSelectedOptions(prevState =>
      prevState.includes(value)
        ? prevState.filter(option => option !== value)
        : [...prevState, value]
    );
  };

  return (
    <div className={`space-y-2 ml-8 mt-3 ${sora.className}`}>
      <div className="space-y-2 ml-10">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox hidden"
              checked={selectedOptions.includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
            />
            <span
              className={`w-4 h-4 border rounded-md flex justify-center items-center ${
                selectedOptions.includes(option.value) ? 'bg-[#62C3C6] border-transparent' : 'border-[#62C3C6]'
              }`}
            >
              {selectedOptions.includes(option.value) && (
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
              )}
            </span>
            <span className="text-sm text-[#365758]">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
