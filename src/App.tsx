import { useState } from 'react'
import JSarticle from './components/JSarticle'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <JSarticle/>
    </>
  )
}

export default App
