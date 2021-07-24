import HomeMain from '../src/components/HomeMain' 
import HomeHeader from '../src/components/HomeHeader'
import { useState } from 'react'

export default function Search(props) {

  const [searchText, setSearchText] = useState('')
  const [movieList, setMovieList] = useState([])

  const handleSearch = async () => { 
    if(searchText !== '') {
      const result = await fetch(`http://localhost:3000/api/search?query=${searchText}`)
      const json = await result.json()
      setMovieList(json.list)
      console.log(setMovieList)
      console.log(movieList)
    }
  }

  return(
    <>
    <HomeHeader />
    <HomeMain>
      <main>
      <input type="text" value={searchText} onChange={e=>setSearchText(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>

      <ul>
          {movieList.map(item=>(
            <li>
              <div>
                <a href={`pais/${item.alpha2Code}`}>
                  <img src={`${item.flag}`} width="150" alt="" /> <br/>
                </a>
                  <p>{item.name}</p>
                  <p>Population: {item.population}</p>
                  <p>Region: {item.region}</p>
                  <p>Capital {item.capital}</p>
              </div>
            </li>
          ))}
        </ul>

      </main>
    </HomeMain>
    </>
  )
}

