import React , {useEffect} from "react";
import { useSelector , useDispatch } from "react-redux";
import { fetchRocketsFromApi } from "../redux/rockets/rockets";
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
                <p>{rocket.description}</p>
            </div>
            </div>
            
        ))}
     </div>
   )
}

export default Rocket