import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect } from 'react';
import { getMissions, joinMission } from '../redux/missions/missionAction';


const Mission = () => {

const dispatch = useDispatch()

useEffect(() => {
  dispatch(getMissions());
}, []);

const showMission = useSelector(state => state.Mission)
console.log(showMission)

const handleClick = (e) => {
  let payload = e.target.id
  dispatch(joinMission(payload))
  console.log(showMission)
  }

return (
  <div > 
       
      {showMission.map(mission => (      
        
        <ul className='wrapper' key={mission.mission_id}>
         <li className='name-cell'>{mission.mission_name}</li>
         <li className='description-cell'>{mission.description}</li> 
          {!mission.join_mission &&
          <button id={mission.mission_id} onClick={(e) => handleClick(e)}>Remove</button>}
          {mission.join_mission &&
          <button id={mission.mission_id} onClick={(e) => handleClick(e)}>Delete</button>}   
        </ul>
      
       
        ))}
   
</div>
)

}

export default Mission