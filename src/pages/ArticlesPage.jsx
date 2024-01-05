import React, { useEffect, useState } from 'react'
import ArticleCard from '../components/common/ArticleCard'
import { Container, Grid } from '@mui/material'


export default function ArticlesPage() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setArticles(data))
  }, [])

  return (
    <Container>
      <Grid container spacing={3}>
      {articles.map(article => (
        <Grid item key={article.id} xs={12} md={6} lg={4}>
          <ArticleCard article={article} />
        </Grid>
      ))}
        
      </Grid>
    </Container>
  )
}

