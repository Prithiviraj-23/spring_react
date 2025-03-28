import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

export default function LandingPage() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/add');
  };

  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-[90vh] bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Platform!
          </h1>
          <button
            onClick={handleStartClick}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-600 transition duration-300"
          >
            Start Here
          </button>
        </div>
      </div>
    </>
  );
}
