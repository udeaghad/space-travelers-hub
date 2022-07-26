import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect } from 'react';
import { getMissions } from '../redux/missions/missionAction';

const Mission = () => {

const dispatch = useDispatch()

useEffect(() => {
  dispatch(getMissions());
}, []);

const showMission = useSelector(state => state.Mission)
return (
  <div >      
      {showMission.map(mission => ( 
                
        <ul className='wrapper' key={mission.mission_id}>
         <li className='name-cell'>{mission.mission_name}</li>
         <li className='description-cell'>{mission.description}</li>  
               
        </ul>
      
      ))}
   
</div>
)

}

export default Mission