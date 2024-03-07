// create an empty Redux store
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'

// configureStore接受reducer函数作为命名参数
export const store = configureStore({
    // reducer是指定如何更新状态的函数集合，会在这里列出应用中所有状态逻辑的reducer，让Redux store知道如何响应不同的action
    reducer: {
        counter: counterReducer,
        //  posts: postsReducer,
        //  users: usersReducer,
    },
})

// 定义RootState类型 表示Redux store的整个状态对象的形状 
// ReturnType<>可以获取 *函数返回值* 的返回类型 
export type RootState = ReturnType<typeof store.getState>

// store.dispatch本身不是返回新值的函数，而是Redux的方法，用于dispatch actions
// 我们关心dispatch方法的类型本身，所以不用ReturnType 
// Appdispatch类型表示的是dispatch方法的签名(signature签名：方法的定义，包括名称、参数列表、返回类型)
export type AppDispatch = typeof store.dispatch

