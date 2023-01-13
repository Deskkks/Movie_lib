import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'

import './index.css'

function MovieDatails() {

  var {id} = useParams()

  const movieURL = import.meta.env.VITE_API
  const apiKey = import.meta.env.VITE_API_KEY
  const imgUrl = import.meta.env.VITE_IMG

  const [data, setData] = useState([{}])
  const [genres, setgenres] = useState([{}])

  useEffect(() => {
    const movie = `${movieURL}${id}?${apiKey}&language=pt-BR`
    getmovie(movie)
  }, [])

  const getmovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setData(data)
    setgenres(data.genres)
  }
  console.log(data);

  const convert = (minutes) => {
    const hours = Math.floor(minutes/ 60);          
    const min = minutes % 60;
    const textHours = (`00${hours}`).slice(-2);
    const textMinutes = (`00${min}`).slice(-2);
    
    return `${textHours }:${textMinutes}`;
  };
  
  
  return (
    <div className='app'>
      <div className='main'>
        <img src={imgUrl+data.poster_path} alt="" />
        <h1>{data.title}</h1>
        <p><AiFillStar/>{Number(data.vote_average).toFixed(1)}</p>
        <p>{data.tagline}</p>
      </div>
      <div className='details'>
        <p className='overview'>
          {data.overview}
        </p>
        {
          genres.length > 1 ? (
            <p><span className="titles">Generos:</span> {genres[0].name}, {genres[1].name}</p>
          ) : (
            <p><span className="titles">Genero:</span> {genres[0].name}</p>            
          ) 
        }
        <p>
          <span className="titles">Data de lançamento:</span> {data.release_date}
        </p>
        <p>
          <span className="titles">Duração:</span> {convert(data.runtime)}
        </p>
      </div>
    </div>
  )
}

export default MovieDatails