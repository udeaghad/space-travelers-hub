import React , {useEffect} from "react";
import { useSelector , useDispatch } from "react-redux";
import { fetchRocketsFromApi , reserveRocket , cancelRocket } from "../redux/rockets/rockets";
import '../styles/rocket.css'

const Rocket = () =>{
   const dispatch = useDispatch();
   const rockets = useSelector((state) => state.Rockets);
 
   useEffect(()=> {
    if(!rockets.length){
        dispatch(fetchRocketsFromApi())
    }
   })
   return (
     <div>
        {rockets.map((rocket) => (
            <div className="rocket-item" key={rocket.id}>
           <img className="rocket-img" src={rocket.images[0]} alt='rocket image' />
            <div>
                <h1>{rocket.name}</h1>
                <p>
                    {rocket.reserved ? <span id="badge">Reserved</span> : null}
                    {rocket.description}
                    </p>
                {(rocket.reserved) && (<button onClick={() => dispatch(cancelRocket(rocket.id))}>Cancel Reservation</button>) }
                {(!rocket.reserved) && (<button onClick={() => dispatch(reserveRocket(rocket.id))}>Add Reservation</button>)}
            </div>
            </div>
            
        ))}
     </div>
   )
}

export default Rocket