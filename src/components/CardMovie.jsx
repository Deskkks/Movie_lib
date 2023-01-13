import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'

function CardMovie({data}) {

  const imgUrl = import.meta.env.VITE_IMG

  return (
    <div className='conteinerMovies'>
      {
        data.length > 0 && (
          data.map((movie, index) => (
            <div className='cardMovie' key={index}>
              <img src={imgUrl + movie.poster_path} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p><AiFillStar /> {movie.vote_average}</p>
              <Link to={`/movie/${movie.id}`}><button>Detalhes</button></Link>
            </div>
          ))
        )
      }
    </div>
  )
}

export default CardMovie