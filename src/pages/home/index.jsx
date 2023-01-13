import { useEffect, useState } from 'react'
import CardMovie from '../../components/CardMovie'
import './index.css'


function Home() {
  
  const movieURL = import.meta.env.VITE_API
  const apiKey = import.meta.env.VITE_API_KEY

  useEffect(() => {
    const topRatedURL = `${movieURL}top_rated?${apiKey}&language=pt-BR`
    getTopRatedMovies(topRatedURL)
  }, [])

  const [data, setData] = useState([{}])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setData(data.results)
  }

  return (
    <div>
      <h1>Melhores filmes:</h1>
      <CardMovie data={data} />
    </div>
  )
}

export default Home