import React from 'react';

const Dropdown = ({ options }) => (
  <select>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default Dropdown;
