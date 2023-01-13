import { useEffect, useState } from 'react'

function Home() {
  
  const movieURL = import.meta.env.VITE_API
  const apiKey = import.meta.env.VITE_API_KEY
  const imgUrl = import.meta.env.VITE_IMG

  useEffect(() => {
    const topRatedURL = `${movieURL}top_rated?${apiKey}`
    getTopRatedMovies(topRatedURL)
  }, [])

  const [data, setData] = useState([{}])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setData(data.results)
    console.log(data);
  }

  return (
    <div>
      <h1>Melhores filmes:</h1>
      {
        data.length > 0 && (
          data.map((movie, index) => (
            <div key={index}>
              <img src={imgUrl + movie.poster_path} alt="" />
              <h2>{movie.title}</h2>
              <p>{movie.vote_average}</p>
              <p>Data de lançamento: {movie.release_date}</p>
            </div>
          ))
        )
      }
    </div>
  )
}

export default Home