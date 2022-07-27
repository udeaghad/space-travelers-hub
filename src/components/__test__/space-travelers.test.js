import missionReducer from '../../redux/missions/missionReducer'
import {joinMission} from '../../redux/missions/missionAction'


test('To test join mission status', () => {
  const Mission = [
    {mission_id:1, mission_name: "Teslar", description: "Telstar 19V (Telstar 19 Vantage)...", join_mission: false},
    {mission_id:2, mission_name: "TThaicom", description: "Thaicom is the name of a series...", join_mission: false},
    {mission_id:3, mission_name: "JCSAT", description: "The JSAT constellation is a...", join_mission: false},
  ]

  expect(missionReducer(Mission, joinMission(2))).toEqual(
    [
      {mission_id:1, mission_name: "Teslar", description: "Telstar 19V (Telstar 19 Vantage)...", join_mission: false},
      {mission_id:2, mission_name: "TThaicom", description: "Thaicom is the name of a series...", join_mission: true},
      {mission_id:3, mission_name: "JCSAT", description: "The JSAT constellation is a...", join_mission: false},
    ]
  )
})