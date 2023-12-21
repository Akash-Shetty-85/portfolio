// ToggleSwitch.js
import React, { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ isDarkTheme, onToggle }) => {
  return (
    <label className="switch h-7">
      <input type="checkbox" checked={isDarkTheme} onChange={onToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
