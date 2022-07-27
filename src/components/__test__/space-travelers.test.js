import missionReducer from '../../redux/missions/missionReducer'
import {joinMission} from '../../redux/missions/missionAction'
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Mission from '../Mission';


describe('To test Mission components', () => {
  test('To Missions component renders successfully!', () => {
    const tree = renderer
      .create(<Provider store={store}><Mission /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
})

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

});


