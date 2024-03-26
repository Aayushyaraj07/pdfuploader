import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pdfer from './components/Pdfer'
import Run from './components/Run'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bahar'>
      <Pdfer/>
      <Pdfer/>
      </div>
      <Run/>
    </>
  )
}

export default App
