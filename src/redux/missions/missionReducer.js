const mission = [];
let updatedItem;
let index;

export default (state = mission, action) => {
  switch (action.type) {
    case 'GET_ALL_MISSION/fulfilled':

      return action.payload;

    case 'JOIN_MISSION':

      state.map((item, i) => {
        if (item.mission_id === action.payload) {
          updatedItem = { ...item, join_mission: !item.join_mission };
          index = i;
        }
      });
      return [
        ...state.slice(0, index),
        updatedItem,
        ...state.slice(index + 1),
      ];

    default:
      return state;
  }
};
