import { useReducer } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PeopleCard from "../peopleCard";

function myFonction(state, action) {
	/*switch (action.type)
  {
    case 'setData':
      return {data : action.value};
    case 'newRequest':
      return { newRequest: action.value };

  }*/
	return { [action.type]: action.value };
}

function Home() {
	/*const [data, setData] = useState();
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [isNewRequest, setIsNewRequest] = useState(false);*/

	//const [state, dispatch] = useReducer(reducer, initialArg, init);
	const [dataRedux, setDispatch] = useReducer(myFonction, {
		data: undefined,
		error: "",
		isLoading: false,
		isNewRequest: false,
	});

	useEffect(() => {
		setDispatch({ type: "isLoading", value: true });
		fetch("https://swapi.dev/api/people")
			.then((response) => {
				setDispatch({ type: "isLoading", value: false });
				return response.json();
			})
			.then((data) => {
				if (data.results.length > 0) {
					return setDispatch({ type: "data", value: data });
				} else {
					setDispatch({ type: "isLoading", value: false });
					return (dataRedux.error = "Pas de données trouvées");
				}
			})
			.catch(() => {
				setDispatch({ type: "isLoading", value: false });
				setDispatch({ type: "error", value: "Une erreur est survenu" });
			});
	}, [dataRedux.isNewRequest]);

	console.log("render");
	return (
		<div className="home">
			<div>
				{dataRedux.isLoading && <div>Loading</div>}
				{dataRedux.data && (
					<div>
						{dataRedux.data.results.map((people, index) => (
							<Link key={index} to={`/people/${index + 1}`}>
								<PeopleCard {...people} />
							</Link>
						))}
						{/* <button
							className="mt-4 p-3 text-white bg-black"
							onClick={() => setIsNewRequest(!isNewRequest)}
						>
							Relancer la requête
						</button> */}
						<button
							className="mt-4 p-3 text-white bg-black"
							onClick={() => {
								setDispatch({
									type: "isNewRequest",
									value: !dataRedux["isNewRequest"],
								});
							}}
						>
							Relancer la requête
						</button>
					</div>
				)}
				{dataRedux.error && <div className="error">{dataRedux.error}</div>}
			</div>
		</div>
	);
}

export default Home;
