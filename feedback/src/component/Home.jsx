import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext.jsx'

const Home = () => {
  const {posts} = useContext(DataContext)
  return (
    <>
    {
      posts.map((post)=>
        <div key={post.id}>
          <h3>{post.id}</h3>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <hr/>
        </div>
      )
     }
    </>
  )
}

export default Home
