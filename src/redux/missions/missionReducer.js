const mission = [];

export default (state = mission, action) => {
  switch (action.type) {
    case 'GET_ALL_MISSION/fulfilled':
      
      return action.payload;
    
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

