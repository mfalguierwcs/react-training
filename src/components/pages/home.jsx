import { useEffect, useState } from "react";
import People from "../people";

function Home() {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://swapi.dev/api/people")
        .then((response) => {
            setIsLoading(false);
            return response.json();
        })
        .then((data) => {
            if (data.results.length > 0) {
                return setData(data);
            } else {
                return setError("Pas de données trouvées");
            }
        })
        .catch(() => {
            setIsLoading(false);
            setError("Une erreur est survenu");
        })
    
    }, [])
    
    return (
        <div className="home">
            <div>
            {
                isLoading && <div>Loading</div>
            }
            {
                data && data.results.map((people, index) => <People key={index} {...people} />)
            }
            {
                error && <div className="error">{error}</div>
            }
            </div>
        </div>
    );
}

export default Home;
