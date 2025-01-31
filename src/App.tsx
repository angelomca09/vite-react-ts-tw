import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { DiReact } from "react-icons/di";
import SyncLoader from "react-spinners/SyncLoader";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className='my-4'>
        - react-icons <DiReact className='inline-block' fontSize={"2rem"} color='#00d8ff' />
      </p>
      <p className='my-4'>
        - react-spinners <span><SyncLoader color='#00d8ff' /></span>
      </p>
      <p className='my-4'>
        - react-router-dom  <a target='_blank' href="https://reactrouter.com/en/main">link</a>
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
