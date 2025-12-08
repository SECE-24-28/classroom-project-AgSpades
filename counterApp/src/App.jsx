import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1);
  }
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {count}

      </div>
      <button onClick={increase}>Increase</button><button onClick={decrease}>Decrease</button >
    </>
  )
}

export default App
