import {useSelector} from 'react-redux'



const Profile = () => {

  const showMission = useSelector(state => state.Mission)

  const missionJoined = showMission.filter(mission => mission.join_mission === true)
  

  return (
    <div>
      <div className="mission-profile">
        <h2>My Missions</h2>
        <ul>
        {missionJoined.map(mission => ( 
          <li key={mission.mission_id}>{mission.mission_name}</li>
        ))}
        </ul>
        

      </div>
    </div>
  )

}

export default Profile