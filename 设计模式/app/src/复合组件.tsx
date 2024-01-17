import './App.css'
import React, { useState } from 'react';

const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

const TextBox = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange} />
);

const LoginPanel = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 实现登录逻辑
    console.log(`Logging in with ${username} and ${password}`);
  };

  return (
    <div className="login-panel">
      <TextBox value={username} onChange={(e) => setUsername(e.target.value)} />
      <TextBox value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button label="Login" onClick={handleLogin} />
    </div>
  );
}
const App: React.FC = () => {
  return (
    <LoginPanel />
  );
};

export default App
