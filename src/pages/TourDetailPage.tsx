import React from 'react';
import { useParams } from 'react-router-dom';

const TourDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8">Virtual Tour Details</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="h-96 bg-gray-200 mb-6 rounded-lg"></div>
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tour #{id}</h2>
          <p className="text-gray-600">This virtual tour is currently under development. Please check back soon for an immersive garden experience!</p>
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage;