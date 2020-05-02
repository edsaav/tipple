import React from 'react';
import './switch.css';

const Switch = (props) => {
  return (
    <>
      <input
        className="switch-checkbox"
        id={props.switchId}
        type="checkbox"
        checked={props.switchOn}
        onChange={props.onSwitchToggle}
      />
      <label
        className="switch-label"
        htmlFor={props.switchId}
      >
        <span className='switch-button' />
      </label>
    </>
  );
};

export default Switch;