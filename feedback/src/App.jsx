import { useContext, useState } from 'react'
import './App.css'
import Home from './component/Home'
import { DataContext } from './context/DataContext';
import Search from './component/Search';
import AddPost from './component/AddPost';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  
  return (
    
    <div>
      <AddPost/>
      <div className='abc'>
        <button id="homebtn" onClick={() => setActiveTab('home')}>Home</button>
        <button id="searchbtn" onClick={() => setActiveTab('search')}>Search</button>
      </div>
      {activeTab === 'home' ? <Home /> : <Search />}
    </div>
  )
}

export default App

