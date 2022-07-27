import {useSelector} from 'react-redux'
import '../styles/profile.css'



const Profile = () => {

  const showMission = useSelector(state => state.Mission)
  const rockets = useSelector(state => state.Rockets)
  const reservedRockets = rockets.filter((rocket) => rocket.reserved)
  const missionJoined = showMission.filter(mission => mission.join_mission === true)
  
  return (
    <div className='profile-page'>
      <div className="mission-profile">
        <h2>My Missions</h2>
        <ul>
        {missionJoined.map(mission => ( 
          <li key={mission.mission_id}>{mission.mission_name}</li>
        ))}
        </ul>

      </div>
      <div className='reserved-rockets-container'>
      <h2>My Rockets</h2>
      {reservedRockets.length ? (
        <div className="rocket-info">
          {reservedRockets.map((rocket) => (
            <p className='reserved-rocket' key={rocket.id}>{rocket.name}</p>
          ))}
        </div>
      ) : null}
      </div>
    </div>
  )

}

export default Profile