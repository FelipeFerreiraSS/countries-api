export default async (req, res) => {

  let query = req.query.query

  const result = await fetch(`https://restcountries.eu/rest/v2/name/${query}?fullText=true`)
  const json = await result.json()

  res.status(200).json({
    list: json.results
  })
  console.log(list)
  console.log(res)
  console.log(query)

}