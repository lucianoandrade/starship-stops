import React,{useEffect} from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './styles.scss';

function ListStarships(props) {
  const ships = [];
  const stops = () => {
     // eslint-disable-next-line 
    props.allShips.map((ship) => {
      const consumables = ship.consumables.split(' ');
        let rightTime = 0;
        switch (consumables[1]) {
        case 'day':
          case 'days':
          rightTime = parseInt(consumables[0]) * 24;
          break;
          case 'week':
        case 'weeks':
            rightTime = parseInt(consumables[0]) * 168;
          break;
          case 'month':
          case 'months':
          rightTime = parseInt(consumables[0]) * 730;
          break;
          case 'year':
        case 'years':
            rightTime = parseInt(consumables[0]) * 8760;
            break;
        default:
            rightTime = 0;
          break;
        }
        if (ship.MGLT !== 'unknown') {
          ships.push({ mglt: ship.MGLT, consumables: rightTime });
        }
    });
    return ships;
  }

  useEffect(() => {
    stops();
    // eslint-disable-next-line 
  },[])

  return (
    <>
       <section>
        <List component="nav" aria-label="main mailbox folders">
          {props.allShips.map((item, index) => item && item.name ? 
            <ListItem className="ships" key={index}>
              <ListItemText className="shipsName">{item.name} - Will make 
                {
                  1000000 / stops().map(ship => ship && ship.MGLT ? (ship.MGLT * ship.consumables) : undefined)} 
                {console.log(stops())} stops
              </ListItemText>
            </ListItem> : <p></p>)
          }
        </List>
      </section>
    </>
  );
};

export default ListStarships;