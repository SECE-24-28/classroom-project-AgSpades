import { useContext } from 'react'
import { DataContext } from '../context/DataContext';
import { Link } from 'react-router-dom';

const Search = () => {
  const { posts, search, setSearch, searchResult } = useContext(DataContext);
  return (
    <div>
      <label>Search</label>
      <input type='text' name='search' value={search} onChange={(e) => setSearch(e.target.value)} />
      {
        (search ? searchResult : posts).map((post) =>
          <div key={post.id}>
            <h3>{post.id}</h3>
            <h3>{post.id}</h3>
            <Link to={`/post/${post.id}`}>{post.title}</Link>

            <p>{post.body}</p>
          </div>
        )
      }
    </div>
  )
}

export default Search
