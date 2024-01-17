//** 自定义hooks需要按照组件提供的Hooks与State结合进行编写逻辑，提高了集成的复杂度 */
//** props getters 简化了这一过程，getter是一个返回多个属性的函数，它命名语义化 */

import React, { useState } from 'react';

const Button = ({ getLabel, handleClick }) => (
    <button onClick={handleClick}>{getLabel()}</button>
);

const TextBox = ({ getValue, onChange, placeholder }) => (
    <input type="text" value={getValue()} onChange={onChange} placeholder={placeholder} />
);

// 使用 Props Getters 模式的 Hooks
const useLoginForm = () => {
    const [loginData, setLoginData] = useState({ username: '', password: '' });

    const handleInputChange = (name) => (e) => {
        const { value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const getUsernameProps = () => ({
        getValue: () => loginData.username,
        onChange: handleInputChange('username'),
    });

    const getPasswordProps = () => ({
        getValue: () => loginData.password,
        onChange: handleInputChange('password'),
    })

    const handleLogin = async () => {
        // 实现登录逻辑
        try {
            // 替换为后端api的url
            const response = await fetch('https://localhost:5173/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: loginData.username,
                    password: loginData.password,
                }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            // 处理登录成功逻辑，如保存 token 或跳转页面
            console.log('Login successful:', data);
        } catch (error) {
            console.log('Login error:', error)
        }
        console.log(`Logging in with ${loginData.username} and ${loginData.password}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

    return {
        getUsernameProps,
        getPasswordProps,
        handleSubmit,
    }
};

//* 组件本身不处理状态和逻辑，只通过props接收必要的逻辑
const ControlledLoginPanel = ({ getUsernameProps, getPasswordProps, handleSubmit }) => {
    return (
        <div className='login-panel'>
            <TextBox
                placeholder="Username"
                {
                ...getUsernameProps()  // 这里 Getters的命名要清晰地反映它们的作用
                }
            />
            <TextBox
                placeholder="Password"
                {
                ...getPasswordProps()
                }
            />
            <Button
                getLabel={() => 'Login'}
                handleClick={handleSubmit}
            />
        </div>
    );
};

const App: React.FC = () => {
    const { getUsernameProps, getPasswordProps, handleSubmit } = useLoginForm();

    return (
        <ControlledLoginPanel
            getUsernameProps={getUsernameProps}
            getPasswordProps={getPasswordProps}
            handleSubmit={handleSubmit}
        />
    );
}


export default App;