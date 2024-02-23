import React, { useState } from 'react';
import classNames from 'classnames';

const ToggleSwitch = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div 
        className={classNames(
          ' flex items-center w-10 hover:shadow-lg  hover:shadow-blue-light   h-6 transition duration-300 ease-in-out rounded-full',
          {
            'bg-blue-500': isActive,
            'bg-gray-300': !isActive,
          }
        )}
        onClick={toggleSwitch}
      >
        <span
          className={classNames(
            ' w-5 h-5 transition duration-300 flex   transform translate-x-0 translate-y-0 bg-white rounded-full shadow-md',
            {
              'translate-x-full': isActive,
            }
          )}
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
