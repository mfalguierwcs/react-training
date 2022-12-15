import { useState } from 'react'
import GiftLine from './giftLine'

function Gifts() {
  const initGifts = [
    {
      id: 1,
      name: 'Tante Huguette',
      idea: 'Bigoudi en titane',
    },
    {
      id: 2,
      name: 'Oncle bob',
      idea: 'Tondeuse à gazon',
    },
  ]
  const [gifts, setGifts] = useState(initGifts)
  const [ideaState, setIdeaState] = useState('')
  const [nameState, setNameState] = useState('')

  const removeGif = (id) => {
    setGifts(gifts.filter((gift) => gift.id !== id))
  }

  const addGift = () => {
    console.log('add')
    setGifts([
      ...gifts,
      {
        id: nameState+ideaState,
        name: nameState,
        idea: ideaState,
      },
    ]);
    setIdeaState("")
    setNameState("")
  }

  console.log(ideaState)
  console.log(nameState)

  // order the list
  return (
    <div>
      <h2 className="text-xl mb-2">Idées de cadeaux de noël</h2>
      {gifts.map((gift) => {
        return (
          <div key={gift.id} onClick={() => removeGif(gift.id)}>
            <GiftLine {...gift} />
          </div>
        )
      })}
      <p className="mt-2">Ajouter une idée de cadeau :</p>
      <div>
        <input
          className="border p-2 mr-2"
          type="text"
          value={ideaState}
          onChange={(e) => setIdeaState(e.target.value)}
          placeholder="idée"
        />
        <input
          className="border p-2 mr-2"
          type="text"
          value={nameState}
          onChange={(e) => setNameState(e.target.value)}
          placeholder="pour qui ?"
        />
        <button onClick={addGift} className="bg-black text-white p-2">
          Ajouter
        </button>
      </div>
    </div>
  )
}

export default Gifts
