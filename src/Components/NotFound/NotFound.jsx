import React from 'react'

function NotFound() {
    return (
    <div className="flex items-center justify-center min-h-screen  px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#35AFA0]">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-500">
          Oops! The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-[#35AFA0] text-white text-sm font-medium rounded-lg shadow-md hover:bg-[#2d9387] transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default NotFound
