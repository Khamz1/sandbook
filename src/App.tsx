import { useState } from 'react'
import JSarticle from './components/jsArticles/JSarticle'
import AddJsArticles from './components/addArticles/AddJsArticles'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <JSarticle/>
    <AddJsArticles/>
    </>
  )
}

export default App
