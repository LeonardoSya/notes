import React, { useState } from 'react';

const Button = ({ label, onClick }) => (
    <button onClick={onClick}>{label}</button>
);

const TextBox = ({ value, onChange }) => (
    <input type="text" value={value} onChange={onChange} />
);

// 受控组件模式的复合组件
const ControlledLoginPanel = () => {
    const [loginData, setLoginData] = useState({ username: '', password: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLogin = () => {
        // 实现登录逻辑
        console.log(`Logging in with ${loginData.username} and ${loginData.password}`);
    };

    return (
        <div className='login-panel'>
            <TextBox
                value={loginData.username}
                onChange={handleInputChange}
            />
            <TextBox
                value={loginData.password}
                onChange={handleInputChange}
            />
            <Button label="Login" onClick={handleLogin} />
        </div>
    );
};

const App:React.FC = () => {
    return (
        <ControlledLoginPanel />
    );
};

export default App;