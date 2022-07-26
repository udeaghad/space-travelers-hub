import React , {useEffect} from "react";
import { useSelector , useDispatch } from "react-redux";
import { fetchRocketsFromApi } from "../redux/rockets/rockets";

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
            <h3>{rocket.name}</h3>
            
        ))}
     </div>
   )
}

export default Rocket