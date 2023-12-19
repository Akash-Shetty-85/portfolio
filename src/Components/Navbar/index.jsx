// Navbar.js
import React, { useState } from 'react';
import './navbar.css';
import ToggleSwitch from './ToggleSwitch';

const Navbar = ({ sections }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    // Add logic here to update your CSS variables or apply a theme class to the body
  };

  return (
    <div className={`flex flex-row justify-between items-center px-2 md:px-8 py-3 md:py-5 ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className='nav-logo text-3xl ml-0 md:text-5xl mb-4 md:mb-0'>
        Akash V
      </div>
      <div className='hidden md:flex flex-wrap items-center gap-x-5'>
        {sections.map((section) => (
          <div key={section.id} className='mb-2 md:mb-0 md:ml-4'>
            {section.section}
          </div>
        ))}
        <hr className='w-[1px] bg-slate-400 h-8' />
        <ToggleSwitch isDarkTheme={isDarkTheme} onToggle={toggleTheme} />
        <button className='bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-xl'>
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Navbar;
