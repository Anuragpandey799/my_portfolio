// src/components/Preloader.js
import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div
          className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
