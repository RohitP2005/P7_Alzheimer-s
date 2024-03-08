import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className="flex w-screen h-screen items-center justify-center flex-col">
      <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
      <button className="btn btn-outline btn-success">Success</button>
  </div>
    </>
  )
}

export default App
