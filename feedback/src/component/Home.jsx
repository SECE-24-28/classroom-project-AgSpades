import { useContext } from 'react'
import { DataContext } from '../context/DataContext.jsx'
// import Search from './Search.jsx'
import { Link } from 'react-router-dom'
const Home = () => {
  const { posts } = useContext(DataContext)
  return (
    <>
      {/* <Search /> */}
      {
        posts.map((post) =>
          <div key={post.id}>

            <h3>{post.id}</h3>
            <Link to={`/post/${post.id}`}>{post.title}</Link>

            <p>{post.body}</p>
            <hr />
          </div>
        )
      }
    </>
  )
}

export default Home
