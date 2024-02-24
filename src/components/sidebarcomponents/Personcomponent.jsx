import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import profile from '../../assets/EagleDev99.svg';

function PersonComponent() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Provided user token
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ5YWRkOTMyNWM4YTBlMTdmZDM5NjkiLCJpYXQiOjE3MDg3NjQ2MzMsImV4cCI6MTcwODc3MTgzM30.JZKqbVUV66VSdi3i9Uzu-gzmYamT0bbjHML1ddssw7w';

    // Setting up Axios request headers with the token
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };

    axios.get('https://eaglechat.onrender.com/user/getUsers', config)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      });
  }, []);

  const handlePersonClick = (userId) => {
    setSelectedPerson(userId === selectedPerson ? null : userId);
  };

  const getShadowStyle = (userId) => {
    return selectedPerson === userId
      ? ` shadow-lg border`
      : ` hover:shadow-lg hover:border `;
  };

  return (
    <div className='w-full'>
      {users.map((user) => (
        <NavLink to="/chat"
          key={user._id} 
          className={`flex justify-between ${getShadowStyle(user._id)} rounded-lg items-center  font-medium `}
          onClick={() => handlePersonClick(user._id)}
        >
          <div className='flex items-center gap-3'>
            <img src={profile} alt="" className='my-2 ml-2 rounded-full w-14 h-14' />
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
