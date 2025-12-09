import { useState } from 'react'
import './App.css'

function App() {

  const studentsList = [
    {
      name: "John",
      age: 19,
      feesPaid: false
    },
    {
      name: "Surya",
      age: 18,
      feesPaid: true
    }
  ]
  return (
    <>
      <h1>Students List</h1>
      {
        studentsList.map(
          (ls, index) => {
            return (
              <li key={index}>
                <ol>{ls.name}</ol>
              </li>
            )
          }
        )
      }
    </>
  )
}

export default App
