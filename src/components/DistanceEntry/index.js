import React, {useState} from "react";
import {TextField, Button} from '@material-ui/core';

import './styles.scss'

function DistanceEntry ({distanceMglt}) {

  const [distance, setDistance] = useState("");
  
  const handleSubmit = e => {
    e.preventDefault();
    distanceMglt(distance);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField  className="textField" label="Distance in MGLT?" type="number" onChange={e => setDistance(e.target.value)} variant="filled" />
        <Button  className="button" type="submit" variant="contained" color="primary">stops</Button>
      </form>
    </>
  );
};

export default DistanceEntry;