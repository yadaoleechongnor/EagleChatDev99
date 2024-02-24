import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function PersonComponent() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const API_URL = 'https://eaglechat.onrender.com/user/getUsers';
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRhMDk1MDI3NDBmYWVhZDgyYWFiMjQiLCJpYXQiOjE3MDg3ODgwNDgsImV4cCI6MTcwODc5NTI0OH0.4LDViGEybc0O_ycf5ycXbFtLED36l6_uJVh8V2EnBjg';
        
        const response = await axios.get(API_URL, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        setUsers(response.data);
      } catch (error) {
        if (error.response && error.response.status === 403) {
          setError('You are not authorized to access this resource.');
        } else {
          setError('An error occurred while fetching users. Please try again later.');
        }
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className='w-full'>
      {error && <div>Error: {error}</div>}
      {users.map((user) => (
        <NavLink to="/chat"
          key={user._id} 
          className={`flex justify-between ${user._id} rounded-lg items-center  font-medium `}
          onClick={() => (user._id)}
        >
          <div className='flex items-center gap-3'>
            <img src={user.profilePicture} alt="" className='my-2 ml-2 rounded-full w-14 h-14' />
            <div>
              <span>{user.username}</span>
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
