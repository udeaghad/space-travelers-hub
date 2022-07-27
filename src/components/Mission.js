import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect } from 'react';
import { getMissions, joinMission } from '../redux/missions/missionAction';


const Mission = () => {

const dispatch = useDispatch()

useEffect(() => {
  dispatch(getMissions());
}, []);

const showMission = useSelector(state => state.Mission)

const handleClick = (e) => {
  let payload = e.target.id
  dispatch(joinMission(payload))
  }

return (
  <div > 
       
      {showMission.map(mission => (      
        
        <ul className='wrapper' key={mission.mission_id}>
         <li className='name-cell'>{mission.mission_name}</li>
         <li className='description-cell'>{mission.description}</li> 
          {!mission.join_mission &&
          <div>
          <button type='button'>NOT A MEMBER</button>
          <button type='button' id={mission.mission_id} onClick={(e) => handleClick(e)}>JOIN MISSION</button>
          </div>
          }
          
          {mission.join_mission &&
          <div>
            <button type='button'>ACTIVE MEMBER</button>
          <button type='button' id={mission.mission_id} onClick={(e) => handleClick(e)}>LEAVE MISSION</button>
          </div>
          }   
        </ul>
      
       
        ))}
   
</div>
)

}

export default Mission