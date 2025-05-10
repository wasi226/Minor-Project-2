import React from 'react';

const MyGardenPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-800 mb-6">My Garden</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-gray-600 mb-4">
          Track and manage your plants in your personal garden space.
        </p>
        {/* Placeholder for garden content - to be implemented */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-gray-500">No plants added yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGardenPage;