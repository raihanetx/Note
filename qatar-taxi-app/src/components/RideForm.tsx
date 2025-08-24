import React from 'react';

const RideForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="pickup" className="block text-sm font-medium text-gray-700">
          Pickup Location
        </label>
        <input
          type="text"
          id="pickup"
          name="pickup"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="dropoff" className="block text-sm font-medium text-gray-700">
          Drop-off Location
        </label>
        <input
          type="text"
          id="dropoff"
          name="dropoff"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="fare" className="block text-sm font-medium text-gray-700">
          Fare
        </label>
        <input
          type="number"
          id="fare"
          name="fare"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Ride
      </button>
    </form>
  );
};

export default RideForm;
