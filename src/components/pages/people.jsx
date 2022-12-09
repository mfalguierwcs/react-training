import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function People() {
  const { id } = useParams()
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://swapi.dev/api/people/${id}`)
      .then((response) => {
        setIsLoading(false)
        if (!response.ok) {
            setError('Pas de données trouvées')
        } else {
            return response.json()
        }
      })
      .then((data) => {
        setData(data)
      })
      .catch(() => {
        setIsLoading(false)
        setError('Une erreur est survenu')
      })
  }, [id])
  return (
    <div className="people-page">
      {isLoading && <div>Loading</div>}
      {data && (
        <div>
          <Link className='border border-black p-2 mb-2 inline-block' to="/">Retour</Link>
          <h2 className="mb-4 text-xl font-bold">{data.name}</h2>
          <div className="grid gap-4 grid-cols-4 grid-rows-2">
            <div>
              <strong>Hair color</strong>
            </div>
            <div>{data.hair_color}</div>
            <div>
              <strong>Height</strong>
            </div>
            <div>{data.height}</div>

            <div>
              <strong>Gender</strong>
            </div>
            <div>{data.gender}</div>
            <div>
              <strong>Mass</strong>
            </div>
            <div>{data.mass}</div>
          </div>
        </div>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  )
}

export default People
