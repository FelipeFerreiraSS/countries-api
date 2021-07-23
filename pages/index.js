import styled from 'styled-components'
import HomeMain from '../src/components/HomeMain' 
import HomeHeader from '../src/components/HomeHeader'

/*const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`*/

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeMain>
        <main>
          <h1>My page</h1>
        </main>
      </HomeMain>
    </>
  )
}
