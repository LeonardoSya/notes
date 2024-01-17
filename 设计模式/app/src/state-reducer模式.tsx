//* State Reducer模式是一种通过将组件的状态更新逻辑委托给一个函数的模式，适合复杂的状态逻辑

import { useState } from 'react';

const TextInput = ({ getInputProps }) => {  // 接受 getInputProps 函数作为props，这个函数返回TextInput需要的所有props
    const inputProps = getInputProps();

    return <input {...inputProps} />;
};

const StateReducerExample = () => {
    // 初始状态为一个空字符
    const [inputValue, setInputValue] = useState('');

    const stateReducer = (state, changes) => {  // 接受 当前状态 和 变化对象 作为参数，基于变化对象决定如何更新状态
        switch (changes) {
            case 'value':
                if (state.value.length >= 10) {
                    return state;
                }
                break;
            // 添加其他case处理不同的变化
            default:
                break;
        }
        return { ...state, ...changes };
    };

    // 状态更新
    // 生成传递给子组件TextInput的props 
    const getInputProps = () => {
        return {
            value: inputValue,
            // 在输入框变化时调用 stateReducer
            onChange: (e) => setInputValue(stateReducer(inputValue, { value: e.target.value })),  // {value: e.target.value} 就是changes(变化对象)
        };
    };

    return (
        <div>
            <h3>State Reducer Example</h3>
            <TextInput getInputProps={getInputProps} />
        </div>
    )
}


export default StateReducerExample;