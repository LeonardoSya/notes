// ** 逻辑部分与渲染部分分开，将数据获取与处理逻辑提取到自定义Hook中，可以在多个组件间共享相同的数据逻辑
// ** 当需要在组件中处理副作用时，将副作用逻辑封装到自定义Hook中，以提高可维护性

import React, { useState } from 'react';

const Button = ({ label, onClick }) => (
    <button onClick={onClick}>{label}</button>
);

const TextBox = ({ name, value, onChange, placeholder }) => (
    <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
);

// 使用自定义Hook，处理登录表单逻辑
const useLoginForm = () => {
    const [loginData, setLoginData] = useState({ username: '', password: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(`Field:${name}, Value:${value}`);
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

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
        e.preventDefault();  // 阻止表单默认提交行为
        handleLogin();
    }

    return {
        loginData,
        handleInputChange,
        handleSubmit,
    }
};

// 把逻辑提取出去，让 ControlledLoginPanel 组件专注于渲染UI，减少了状态和事件处理逻辑的混杂
const ControlledLoginPanel = () => {
    const { loginData, handleInputChange, handleSubmit } = useLoginForm();

    return (
        <div className="login-panel">
            <form onSubmit={handleSubmit}>
                <TextBox
                    name={'username'}
                    value={loginData.username}
                    onChange={handleInputChange}
                    placeholder={'username'}
                />
                <TextBox
                    name={'password'}
                    value={loginData.password}
                    onChange={handleInputChange}
                    placeholder={'password'}
                />
                <Button label={'Login'} onClick={handleSubmit} />

            </form>
        </div>
    );
}

const App: React.FC = () => {
    return (
        <ControlledLoginPanel />
    )
};

export default App;