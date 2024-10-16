import React from 'react';

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 pt-[100px]">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="w-64 h-80 bg-gray-200 rounded-lg shadow-md overflow-hidden animate-shimmer">
          <div className="w-full h-40 bg-gray-300 rounded-t-lg"></div>
          <div className="p-4">
            <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
            <div className="h-4 bg-gray-300 rounded-md mb-2 w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded-md w-2/4"></div>
            <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;