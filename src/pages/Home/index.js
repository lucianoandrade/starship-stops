import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import DistanceEntry from "../../components/DistanceEntry";
import ListStarship from "../../components/ListStarship";
import ListShips from "../../services";

function Home(props) {

    const [shipsAll, setShipsAll] = useState([]);

    useEffect(() => {
        ListShips.get().then(response => setShipsAll(response.data.results));
    },[])

    return (
        <>
            <Header />
            <DistanceEntry />
            <ListStarship allShips={shipsAll}/>
        </>
    )
}
export default Home;