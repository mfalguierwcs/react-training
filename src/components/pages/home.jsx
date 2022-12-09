import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PeopleCard from '../peopleCard'

function Home() {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isNewRequest, setIsNewRequest] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('https://swapi.dev/api/people')
      .then((response) => {
        setIsLoading(false)
        return response.json()
      })
      .then((data) => {
        if (data.results.length > 0) {
          return setData(data)
        } else {
          setIsLoading(false)
          return setError('Pas de données trouvées')
        }
      })
      .catch(() => {
        setIsLoading(false)
        setError('Une erreur est survenu')
      })
  }, [isNewRequest])
  console.log('render')
  return (
    <div className="home">
      <div>
        {isLoading && <div>Loading</div>}
        {data && (
          <div>
            {data.results.map((people, index) => (
              <Link key={index} to={`/people/${index + 1}`}>
                <PeopleCard {...people} />
              </Link>
            ))}
            <button
              className="mt-4 p-3 text-white bg-black"
              onClick={() => setIsNewRequest(!isNewRequest)}
            >
              Relancer la requête
            </button>
          </div>
        )}
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  )
}

export default Home
