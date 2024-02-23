import React, { useState } from 'react';
import logo from "../../assets/logo.jpg";
import { NavLink } from 'react-router-dom';

function PersonComponent() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handlePersonClick = (personId) => {
    setSelectedPerson(personId === selectedPerson ? null : personId);
  };

  const getShadowStyle = (personId) => {
    return selectedPerson === personId
      ? ` shadow-lg border`
      : ` hover:shadow-lg hover:border `
  };

  return (
    <div className='w-full'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((personId) => (
        <NavLink to="/chat"
          key={personId}
          className={`flex justify-between ${getShadowStyle(personId)} rounded-lg items-center  font-medium `}
          onClick={() => handlePersonClick(personId)}
        >
          <div className='flex items-center gap-3'>
            <img src={logo} alt="" className='my-2 ml-2 rounded-full w-14 h-14' />
            <div>
              <span>eagleDev99 </span>
              <p className='text-sm text-gray-300'>you: ok </p>
            </div>
          </div>
          <div className='h-12'>
            <span className='mr-2'> 9:00 </span>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default PersonComponent;
