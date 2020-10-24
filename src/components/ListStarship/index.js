import React, {useState, useEffect} from "react";
import ListShips from "../../services";

import './styles.scss';

function ListStarships() {

  const [allShips, setAllShips] = useState([]);

  const list = () => {
    ListShips.get().then(response => setAllShips(response.data.results)
    )
  }

  useEffect(() => {
    list()
  },[])

  console.log(allShips)
  return (
    <>
      <div>
        {allShips.map(item => item && item.name ? 
        <ul><li>{item.name}</li></ul> : <p></p>)
        }
      </div>
    </>
  );
};

export default ListStarships;