import { useState } from 'react'
import {BiCameraMovie,BiSearchAlt2} from 'react-icons/bi'
import {Link, useNavigate} from 'react-router-dom'

import './navBar.css'

function NavBar() {

  const [search, setSearch] = useState()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    if (!search) return;

    console.log(search);

    navigate(`/search?q=${search}`,{replace: true});
    setSearch("");
  }

  return(
    <header>
      <nav>
        <h2>
          <Link exact="true" to='/'>
            <BiCameraMovie /> MovieLib
          </Link>
        </h2>
        <form onSubmit={handleSubmit}>
          <input 
          type="text"
          name='search'
          id='search'
          onChange={(e) => {
            setSearch(e.target.value)}
          } 
          value={search}
          />
          <button type="submit"><BiSearchAlt2 /></button>
        </form>
      </nav>
    </header>
  )
}

export default NavBar