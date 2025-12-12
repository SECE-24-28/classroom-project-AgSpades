import './App.css'
import Home from './component/Home'
import Search from './component/Search';
import AddPost from './component/AddPost';
import { Route, Routes, Link } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <>
      <ol>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/newpost">NewPost</Link></li>
      </ol>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/newpost" element={<AddPost />} />
        </Routes>
      </DataProvider>
    </>
  )
}

export default App

