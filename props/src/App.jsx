import { useState, useContext } from 'react'
import './App.css'
import { DataProvider } from './context/DataContext'
import AOne from './components/AOne';
import BOne from './components/BOne';
import DataContext from './context/DataContext';

function NameChanger() {
  const [newName, setNewName] = useState('');
  const { setName } = useContext(DataContext);

  const handleChangeName = () => {
    if (newName.trim()) {
      setName(newName);
      setNewName('');
    }
  }

  return (
    <>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="button"
        value="Change Name"
        onClick={handleChangeName}
      />
      <AOne />
      <BOne />
    </>
  );
}

function App() {
  return (
    <>
      <DataProvider>
        <NameChanger />
      </DataProvider>
    </>
  )
}

export default App