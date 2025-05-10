import React from 'react';

const VirtualToursPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Virtual Garden Tours</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tour cards will be populated here */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Coming Soon</h2>
            <p className="text-gray-600">Virtual tours are currently under development. Check back soon for an immersive garden experience!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualToursPage;