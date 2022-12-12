import { useEffect, useState, useReducer } from 'react'
import { Link } from 'react-router-dom'
import PeopleCard from '../peopleCard'
import useFetch from '../../utils/useFetch';

function Home() {
  const reducer = (state,action) => {
    switch(action.type) {
      case 'setData':
        return {...state, data: action.data};
      case 'setError':
        return {...state, error: action.data};
      case 'setIsLoading':
        return {...state, isLoading: action.data};
      case 'setIsNewRequest':
        return {...state, isNewRequest: action.data}
      default:
        throw new Error();
    }
  };
  const [state,dispatch] = useReducer(reducer, {
    data:null,
    error: "",
    isLoading: false,
    isNewRequest: false
  });
  const stateFetch = useFetch('https://swapi.dev/api/people', state, dispatch);
  return (
    <div className="home">
      <div>
        {state.isLoading && <div>Loading</div>}
        {state.data && (
          <div>
            {state.data.results.map((people, index) => (
              <Link key={index} to={`/people/${index + 1}`}>
                <PeopleCard {...people} />
              </Link>
            ))}
            <button
              className="mt-4 p-3 text-white bg-black"
              onClick={() => 
                dispatch({type: 'setIsNewRequest', data: !state.isNewRequest})}
            >
              Relancer la requête
            </button>
          </div>
        )}
        {state.error && <div className="error">{state.error}</div>}
      </div>
    </div>
  )
}

export default Home
