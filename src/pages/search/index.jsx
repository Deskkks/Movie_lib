import { useEffect, useState } from 'react'
import {useSearchParams} from 'react-router-dom'
import CardMovie from '../../components/CardMovie'

function Search () {

  const searchURL = import.meta.env.VITE_SEARCH
  const apiKey = import.meta.env.VITE_API_KEY

  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')

  const [data, setData] = useState([])

  useEffect(() => {
    const searchedMoviesURL = `${searchURL}?${apiKey}&query=${query}&language=pt-BR`
    getSearchedMovies(searchedMoviesURL)
  },[])

  const getSearchedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setData(data.results)
  }

  return(
    <div>
      <h1>Resultados para {query}:</h1>
      <CardMovie data={data} />
    </div>
  )
}

export default Search