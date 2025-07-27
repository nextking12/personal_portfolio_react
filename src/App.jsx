import { useState } from 'react'
import './App.css'
import Hello from './components/Hello'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Hello />
       <About />
      </div>
      
    </>
  )
}

export default App
