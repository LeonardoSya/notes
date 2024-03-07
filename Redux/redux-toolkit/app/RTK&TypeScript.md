```js
// 1. Root State & Dispatch Types
// app/store.ts
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// 2. Typed Hooks
// create typed versions of the *useDispatch and useSelector* hooks for usage in app
// app/hooks.ts
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// 返回AppDispatch类型的dispatch函数
export const useAppDispatch: () => AppDispatch = useDispatch
// 具有RootState类型的状态 返回的状态片段拥有RootState类型
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// 3. Slice State & Action Types
// Each slice file should define a type for its initial state value, so createSlice can correctly infer the type of *state* in each case reducer
// action 采用 PayloadAction<T> 将action.payload作为通用参数
// features/counter/counterSlice.ts
// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
}
...
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
...
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value


// 4. In Components
// Counter.tsx
import { useAppSelector, useAppDispatch } from 'app/hooks'
... 
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

