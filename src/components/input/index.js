import React from 'react';
import './index.css';

export const Input = ({ name, type, value, onChange }) => (
  <label className={`input-el input-el--${type}`} htmlFor={name}>
    {name}{` `}
    <input
      id={name}
      type={type}
      value={value} 
      onChange={onChange} />
  </label>
);

export default Input;