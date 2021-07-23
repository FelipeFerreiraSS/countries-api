export default async (req, res) => {
  const result = await fetch(`https://restcountries.eu/rest/v2/alpha/${req.query.alpha2Code}`)
  const json = await result.json()

  res.status(200).json({ 
    info: json
  })
}