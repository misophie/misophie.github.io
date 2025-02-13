// FloatingToolbar.js
import React from 'react';
import './FloatingToolbar.css'; // Import CSS for styling
import MoonIcon from './assets/moon-icon.svg';
import SunIcon from './assets/sun-icon.svg';

const FloatingToolbar = ({onScrollToHeader, setDarkMode, isDarkMode}) => {
  return (
      <div className="floating-toolbar">
        {/* <button>Home</button> */}
        <button onClick={() => setDarkMode()}>{isDarkMode ? <img src={MoonIcon} alt="Night Mode"/> : <img src={SunIcon} alt="Light Mode"/>}</button>
        <button onClick={() => onScrollToHeader('header1')}>About Me</button>
        <button onClick={() => onScrollToHeader('header2')}>Experience/Education</button>
        <button onClick={() => onScrollToHeader('header3')}>Projects</button>
      </div>
  );
};

export default FloatingToolbar;
