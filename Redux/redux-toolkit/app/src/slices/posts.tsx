import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    loading: false,
    hasErrors: false,
    posts: [],
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getPosts: (state) => {
            state.loading = true
        },
        getPostsSuccess: (state, { payload }) => {
            state.posts = payload
            state.loading = false
            state.hasErrors = false
        },
        getPostsFailure: (state) => {
            state.loading = false
            state.hasErrors = true
        },
    },
})