import React from 'react';
import Login from './components/Login/Login';

function App() {
  const handleLogin = (data: any) => {
    console.log('Login success, data =', data);
    // TODO: redirect หรือเก็บ token ได้ที่นี่
  };

  return (
    <div className="App">
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
