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
  <div className='mission-pg'> 
     <table>  
      <thead>
        <tr className='table-head-wrapper'>
          <th className='mission-header'>Mission</th>
          <th className='descr-header'>Description</th>
          <th className='status-header'>Status</th>
          
        </tr>        
      </thead>
      <tbody>

      
      {showMission.map(mission => (      
        
        <tr className='wrapper' key={mission.mission_id}>
         <td className='name-cell'>{mission.mission_name}</td>
         <td className='description-cell'>{mission.description}</td> 
          {!mission.join_mission?
          <td className='status-container'>
          <div className='badge-container'> 
          <span className='badge'>NOT A MEMBER</span>
          </div>
          <div className='btn-container'> 
          <button className='join-btn' type='button' id={mission.mission_id} onClick={(e) => handleClick(e)}>JOIN MISSION</button>
          </div>
          </td>: 
            <td className='status-container'>
              <div className='badge-container'> 
            <span className='active-badge'>ACTIVE MEMBER</span>
            </div>
            <div className='btn-container'> 
          <button className='leave-btn' type='button' id={mission.mission_id} onClick={(e) => handleClick(e)}>LEAVE MISSION</button>
          </div>
          </td>
          }
        
        </tr>
      
       
        ))}
        </tbody>
   </table>
</div>
)

}

export default Mission