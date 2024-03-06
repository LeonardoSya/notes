import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import fetchPosts from '../actions/postsActions'
import { Post } from '../components/post'

const PostsPage = ({ dispatch, loading, hasError, posts }) => {
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const renderPosts = () => {
        if (loading) return <p>Loading...</p>
        if (hasError) return <p>Unable to display posts.</p>
        return posts.map(post => <Post key={post.id} post={post} />)
    }

    return (
        <section>
            <h1>Posts</h1>
            {renderPosts()}
        </section>
    )
}

const mapStateToProps = (state) => ({
    loading: state.posts.loading,
    hasError: state.posts.hasError,
    posts: state.posts.posts,
})

export default connect(mapStateToProps)(PostsPage);
