import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'; 

import { apiLink } from '../../auth/Api';

function PersonComponent() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRhZDk3NWEyZTA1MmE1ZDRhZDc5N2YiLCJpYXQiOjE3MDg4NDEzMzMsImV4cCI6MTcwODg0ODUzM30.ze93qZ2qC-cWv_qFlcSV2eHiduvLZlXYxGFV4pw61r8";

        const response = await axios.get(`${apiLink}/user/getUsers`, {
          headers: {
            Authorization: token,
          },
        });

        if (!response.data) {
          throw new Error('No data received');
        }

        setUserData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className='w-full'>
      {error && <p>Error: {error}</p>}
      {userData && (
        <NavLink to="/chat" className={`flex justify-between rounded-lg items-center font-medium`}>
          <div className='flex items-center gap-3'>
            <img src={userData.profilepicture} alt="" className='my-2 ml-2 rounded-full w-14 h-14' />
            <div>
              <span>{userData.username}</span>
              <p className='text-sm text-gray-300'>you: ok</p>
            </div>
          </div>
          <div className='h-12'>
            <span className='mr-2'>9:00</span>
          </div>
        </NavLink>
      )}
    </div>
  );
}

export default PersonComponent;
