import React, { useState } from 'react';
import Login from './components/Login/Login';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (data) => {
    console.log('Login success:', data);
    setUser(data);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>ยินดีต้อนรับ {user.username} 🎉</h2>
      <p>Token ของคุณคือ: {user.token}</p>
      <button onClick={handleLogout}>ออกจากระบบ</button>
    </div>
  );
}

export default App;
