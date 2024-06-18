import React, { useState } from 'react';
import AllRoute from './routes/AllRoute';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <AllRoute selectedUser={selectedUser} onSelectUser={handleSelectUser} />
    </div>
  );
}

export default App;
