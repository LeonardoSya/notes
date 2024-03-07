import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// 返回AppDispatch类型的dispatch函数
export const useAppDispatch: () => AppDispatch = useDispatch
// 具有RootState类型的状态 返回的状态片段拥有RootState类型
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector