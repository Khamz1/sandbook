import React from 'react'
import useJsStore from './JSarticle.store'
import  './jsArticle.scss'

function JSarticle() {
    const articles = useJsStore((state)=>state.articles)
    const handleIncArt=useJsStore((state)=>state.incArticles)
  return (
    <div>
        <h1 className='greeting'>Первая статья на этом сайте</h1>
        <p>Самая база, это lorem ipsum, LI - это просто пустой текст,
         который заполнит необходимую пустоту в string переменных... или пустоту в душе</p>
         <p>А здесь внизу я поиспытаю zustand</p>
         <h4>{articles}</h4>
         <button onClick={handleIncArt}>Плюсую</button>
    </div>
  )
}


export default JSarticle