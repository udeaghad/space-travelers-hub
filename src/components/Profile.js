import {useSelector} from 'react-redux'



const Profile = () => {

  const showMission = useSelector(state => state.Mission)

  const missionJoined = showMission.filter(mission => mission.join_mission === true)
  

  return (
    <div>
      <div className="mission-profile">
        <h2>My Missions</h2>
        {missionJoined.map(mission => ( 
          <div key={mission.mission_id}>{mission.mission_name}</div>
        ))}

      </div>
    </div>
  )

}

export default Profile