import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// define type for slice state
export interface CounterState {
    value: number
}

// define initial state using the type
const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    // createSlice will infer the state type from 'initialState' argument(参数)
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // Use PayloadAction type to declare the contents of action.payload
        incrementByAmount: (state, action: PayloadAction<number>) => {
            // the generated action creators will be correctly typed to accept a payload argument based on the PayloadAction<T>
            state.value += action.payload
        },
    },
});

// 为每个reducer生成action creator 从counterSlice.actions解构出来
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 处理此slice相关的actions，可以直接用于Redux store
export default counterSlice.reducer;

// 这是一个thunk函数，允许执行异步逻辑，可以像常规action一样被分发
export const incrementAsync = (amount: number) => (dispatch: (arg0: { payload: number; type: "counter/incrementByAmount"; }) => void) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000);
}

// other code such as selectors can use the RootState type
export const selectCount = (state: RootState) => state.counter.value

