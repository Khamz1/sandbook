import React, { useEffect, useState } from 'react'
import { useArticles } from './JSarticle.store'
import  './jsArticle.scss'

function JSarticle() {
  const articles = useArticles(state=>state.articles)
    const {loading, error,fetchArticles } = useArticles((state)=>({
      loading:state.loading,
      error:state.error,
      fetchArticles:state.fetchArticles
    }))
    const addArticle=useArticles((state)=>state.addArticles)
   
  return (
    <div>
        <h1 className='greeting'>Первая статья на этом сайте</h1>
        <p>Самая база, это lorem ipsum, LI - это просто пустой текст,
         который заполнит необходимую пустоту в string переменных... или пустоту в душе</p>
         <p>А здесь внизу я поиспытаю zustand</p>
         <div>
         {articles.map((item)=>{return <div key={item.id}>{item.title}</div>})}</div>
         <button onClick={fetchArticles}>Плюсую</button>
    </div>
  )
}


export default JSarticle