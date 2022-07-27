import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect } from 'react';
import { getMissions, joinMission } from '../redux/missions/missionAction';



const Mission = () => {
const showMission = useSelector(state => state.Mission)

const dispatch = useDispatch()

useEffect(() => {
  if(!showMission.length){
    dispatch(getMissions())
}
}, [])


const handleClick = (e) => {
  e.preventDefault();
  let payload = e.target.id
  dispatch(joinMission(payload))
  }

return (
  <div > 
       
      {showMission.map(mission => (      
        
        <ul className='wrapper' key={mission.mission_id}>
         <li className='name-cell'>{mission.mission_name}</li>
         <li className='description-cell'>{mission.description}</li> 
          {!mission.join_mission?
          <div>
          <span className='badge'>NOT A MEMBER</span>
          <button type='button' id={mission.mission_id} onClick={(e) => handleClick(e)}>JOIN MISSION</button>
          </div>: 
          <div>
            <span className='badge'>ACTIVE MEMBER</span>
          <button type='button' id={mission.mission_id} onClick={(e) => handleClick(e)}>LEAVE MISSION</button>
          </div>
          }
        
        </ul>
      
       
        ))}
   
</div>
)

}

export default Mission