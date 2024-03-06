import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import DashboardPage from './pages/dashboard-page'
import PostsPage from './pages/posts-page'

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={DashboardPage} />
                <Route path="/posts" element={PostsPage} />
            </Routes>
            <Link to="/">Dashboard</Link>
        </>
    )
}

export default App;