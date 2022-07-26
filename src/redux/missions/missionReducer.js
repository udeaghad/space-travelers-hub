import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { getMissions } from './missionAction';

const mission = [];

export default (state = mission, action) => {
  switch (action.type) {
    case 'GET_ALL_MISSION/fulfilled':
      
      return [...state, action.payload];
    
    case 'JOIN_MISSION':
     state.map(item => {
      if(item.mission_id === action.payload){
        return {
          ...state,
          join_mission: !state.join_mission,
        };
      }
     })

     default:
      return state
  }
}

const dispatch = useDispatch()

useEffect(() => {
  dispatch(getMissions());
}, []);