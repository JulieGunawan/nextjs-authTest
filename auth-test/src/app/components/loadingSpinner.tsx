"use client";
import React from "react";
import { ColorType, SizeType } from "./type";

interface LoadingSpinnerProps {
    size?: SizeType;
    color?: ColorType;
}
export default function LoadingSpinner({
  size = SizeType.Medium,
  color = ColorType.Blue
}:LoadingSpinnerProps) {
  // Size mappings
  const sizeClasses = {
    [SizeType.Small]: "w-4 h-4",
    [SizeType.Medium]: "w-8 h-8",
    [SizeType.Large]: "w-12 h-12"
  };
    
  // Color mappings
  const colorClasses = {
    [ColorType.Blue]: "border-blue-500",
    [ColorType.Gray]: "border-gray-500",
    [ColorType.White]: "border-white",
    [ColorType.Black]: "border-black"
  };
    
  return (
    <div className="flex justify-center items-center">
      <div 
        className={`${sizeClasses[size]} ${colorClasses[color]} border-4 border-t-transparent rounded-full animate-spin`}
        role="status"
        aria-label="loading"
      />
    </div>
  );
}