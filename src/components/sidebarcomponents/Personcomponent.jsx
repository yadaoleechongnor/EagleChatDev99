import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import fetchUserData from '../../hooks/useGetconversations';

function PersonComponent({ onSelectUser }) {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchUserData(); 
        console.log('User Data:', data);
        if (!data || !Array.isArray(data)) {
          throw new Error('No data received or data is not an array');
        }
        setUsers(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching user data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='w-full'>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {users.length > 0 && users.map((user, index) => (
        <NavLink 
          key={index} 
          to="/chat" 
          className={`flex justify-between rounded-lg items-center font-medium`}
          onClick={() => onSelectUser(user)}
        >
          <div className='flex items-center gap-3'>
            <img src={user.profilePic} alt={user.username} className='my-2 ml-2 rounded-full w-14 h-14' />
            <div>
              <span>{user.username}</span>
              <p className='text-sm text-gray-300'>you: ok</p>
            </div>
          </div>
          <div className='h-12'>
            <span className='mr-2'>9:00</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default PersonComponent;
