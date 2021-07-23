import Link from 'next/link'
import HomeHeader from '../../src/components/HomeHeader'

export default function Pais({info}) {
  
  return (
    <>
    <HomeHeader />
    <Link href="/">Voltar para Home</Link>
    <h1>
      <img src={`${info.flag}`} width="150" alt="" /> <br/>
      <p>{info.name}</p>
      <p>{info.nativeName}</p>
      <p>{info.population}</p>
      <p>{info.region}</p>
      <p>{info.subregion}</p>
      <p>{info.capital}</p>
      <p>{info.topLevelDomain}</p>
      <p>{info.currencies[0].name}</p>
      <p>{info.languages[0].name}</p>
      {info.borders}
    </h1>
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/pais/${context.params.alpha2Code}`)
  const json = await res.json()
  //<p>{info.currencies[1]}</p>
  //<p>{info.languages[2]}</p>
  return {
    props: {
      info: json.info
    }
  }
}
