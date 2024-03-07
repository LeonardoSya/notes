import React, { useState } from 'react';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
} from './counterSlice';
// ** import pre-typed hooks instead of the standard hooks from React-Redux
// import { useSelector, useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

export function Counter() {
    // 用useSelector从store中读取数据
    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector((state) => state.counter.value);
    // 用useDispatch获取dispatch，然后分发actions
    const dispatch = useAppDispatch();
    const [incrementAmount, setIncrementAmount] = useState('3');

    return (
        <div>
            <div>
                <button aria-label='Increment value' onClick={() => dispatch(increment())}>
                    Increment +
                </button>
                <span>{count}</span>
                <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
                    Decrement -
                </button>
            </div>
            <div>
                <input aria-label='Set increment amount' value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)} />
                <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}> Add Amount</button>
                <button onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>Add Amount Async</button>
            </div>
        </div>
    );
}