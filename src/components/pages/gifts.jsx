import { useState } from "react";

function Gifts() {
    const [nameState, setNameState] = useState("")
    const [ideaState, setIdeaState] = useState("")
    const gifts = [
        {
            id: 1,
            name: "Tante Huguette",
            idea: "Dentier"
        },
        {
            id: 2,
            name: "Oncle Jean",
            idea: "Mob"
        }
    ]
    const [giftsState, setGiftsState] = useState(gifts);
    const addGift = () => {

    }
    console.log(nameState, ideaState)
    return ( <div>
        <h2 className="text-xl mb-3">Page cadeaux de noël</h2>
        {
            giftsState.map(gift => <div key={gift.id}>{gift.name} {gift.idea}</div>)
        }

        <h2>Ajouter un cadeau</h2>
        <div>
            <input className="border" type="text" value={nameState} onChange={(e) => setNameState(e.target.value)} placeholder="Pour qui ?" />
            <input className="border" type="text" value={ideaState} onChange={(e) => setIdeaState(e.target.value)} placeholder="Idée"/>
            <button className="btn-blue" onClick={addGift}>Ajouter</button>
        </div>
        
    </div> );
}

export default Gifts;