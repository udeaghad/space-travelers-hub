const mission = [];
let UpdatedItem = '';
let Index = '';

export default (state = mission, action) => {
  switch (action.type) {
    case 'GET_ALL_MISSION/fulfilled':

      return action.payload;

    case 'JOIN_MISSION':
      state.map((item, i) => {
        if (item.mission_id === action.payload) {
          UpdatedItem = { ...item, join_mission: !item.join_mission };
          Index = i;
        }
        return (UpdatedItem, Index);
      });
      return [
        ...state.slice(0, Index),
        UpdatedItem,
        ...state.slice(Index + 1),
      ];

    default:
      return state;
  }
};
