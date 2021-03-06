import HomeMain from '../src/components/HomeMain' 
import HomeHeader from '../src/components/HomeHeader'

/*const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`*/

export default function Home(props) {
  return (
    <>
      <HomeHeader>
        <header>
          <section>
            <h1>Where in the world?</h1>
            <div>
              <img src="../public/teste.png" alt="" />
              <p>Dark Mode</p>
            </div>
          </section>
        </header>
      </HomeHeader>
      <HomeMain>
        <main>
        <section>
          <ul>
            {props.list.map(item=>(
              <li key={item.name}>
                <div>
                  <a href={`pais/${item.alpha2Code}`}>
                    <img src={`${item.flag}`} width="150" alt="" /> <br/>
                  </a>
                  <h3>{item.name}</h3>
                  <p>Population: {item.population}</p>
                  <p>Region: {item.region}</p>
                  <p>Capital {item.capital}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
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
