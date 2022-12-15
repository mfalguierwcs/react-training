import { useState } from 'react'
import { useEffect } from 'react'
import Slip from '../slip'

function About() {
  const [adviceState, setAdviceState] = useState()
  useEffect(() => {
    const adviceInterval = setInterval(() => {
      fetch('https://api.adviceslip.com/advice')
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
        })
        .then((json) => setAdviceState(json.slip))
    }, 5000)
    return () => {
    clearInterval(adviceInterval)
     console.log("démontage du composant");
    }
  }, [])
  console.log(adviceState)
  return (
    <div className="about">
      {adviceState ? <Slip advice={adviceState} /> : null}
    </div>
  )
}

export default About
