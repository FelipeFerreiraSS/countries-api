import styled from 'styled-components'
import HomeMain from '../src/components/HomeMain' 
import HomeHeader from '../src/components/HomeHeader'
import Link from 'next/link'

/*const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`*/

export default function Home(props) {
  return (
    <>
      <HomeHeader />
      <HomeMain>
        <main>
        <input type="text"/>
        <Link href="/search">Buscar</Link>
        <ul>
          {props.list.map(item=>(
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

export async function getServerSideProps() {
  const res = await fetch('https://restcountries.eu/rest/v2/all')
  .then(res => res.json())
  return {
    props: {
      list: res
    }
  }
}
