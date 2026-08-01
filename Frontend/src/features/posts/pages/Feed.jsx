import React, { useEffect } from 'react'
import "../style/feed.scss"
import Post from '../components/Post'
import { usePost } from '../hooks/usePost'
import Navbar from '../../shared/components/Navbar'

const Feed = () => {

  const { feed, handleGetFeed, loading } = usePost()

  useEffect(() => {
    handleGetFeed()
  }, [])

  if (loading || !feed) {
    return (
      <main><h1>Loading...</h1></main>
    )
  }

  return (
    <main className='feed-page'>
      <Navbar />
      <div className="feed">
        <div className="posts">
          {feed.map(post => {
            return <Post user={post.user} post={post} />
          }).reverse()}
        </div>
      </div>
    </main>
  )
}

export default Feed