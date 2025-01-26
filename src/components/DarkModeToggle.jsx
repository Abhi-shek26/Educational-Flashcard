import React from 'react';
import "./DarkModeToggle.css";
const DarkModeToggle = ({ toggleDarkMode, darkMode }) => {
  return (
    <button onClick={toggleDarkMode} className="dark-mode-toggle">
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;