import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([
    { id: 1, sname: "Vinoth", fee: true },
    { id: 2, sname: "Shiva", fee: false },
    { id: 3, sname: "Harish", fee: true },
    { id: 4, sname: "David", fee: false }
  ]);

  const handleDelete = (id) => {
    const newList = list.filter((ls) => ls.id != id)
    setList(newList)
  }
  const handleCheck = (id) => {
    const newList = list.map((ls) => (ls.id === id) ? ({ ...ls, fee: !ls.fee }) : (ls))
    setList(newList)
  }
  return (
    <>
      <h1>Students List</h1>
      <hr />
      <ul>
        {
          list.map((ls) =>
            <li key={ls.id}>
              <input type="checkbox" checked={ls.fee}
                onChange={() => handleCheck(ls.id)} />
              <label>{ls.sname}</label>
              <button onClick={() => handleDelete(ls.id)}>Delete</button>
            </li>
          )
        }
      </ul>

      <br /><br />

      <p>Student count : {list.length}</p>
    </>
  )
}

export default App