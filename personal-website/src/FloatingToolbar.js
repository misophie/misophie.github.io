// FloatingToolbar.js
import React from 'react';
import './FloatingToolbar.css'; // Import CSS for styling

const FloatingToolbar = () => {
  return (
    <div className="floating-toolbar">
      {/* <button>Home</button> */}
      <button><img src="../moon-icon.svg" alt="Night Mode"></img></button>
      <button>About Me</button>
      <button>Experience/Education</button>
      <button>Projects</button>
    </div>
  );
};

export default FloatingToolbar;
