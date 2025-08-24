import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl">Qatar Taxi App</h1>
      <ThemeToggleButton />
    </header>
  );
};

export default Header;
