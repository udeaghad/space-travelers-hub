const FETCH_ROCKETS = 'space-travelers-hub/rockets/FETCH_ROCKETS';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_ROCKET = 'CANCEL_ROCKET';

const initialState = [];
let resState;

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    case RESERVE_ROCKET:
      resState = state.map((item) => {
        if (item.id !== action.id) return item;
        return { ...item, reserved: true };
      });
      return resState;
    case CANCEL_ROCKET:
      resState = state.map((item) => {
        if (item.id !== action.id) return item;
        return { ...item, reserved: false };
      });
      return resState;
    default:
      return state;
  }
};

const fetchRocket = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

const fetchRocketsFromApi = () => async (dispatch) => {
  const data = await fetch('https://api.spacexdata.com/v3/rockets');
  const response = await data.json();
  dispatch(fetchRocket(response.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    description: rocket.description,
    images: rocket.flickr_images,
    reserved: false,
  }))));
};

const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  id,
});

const cancelRocket = (id) => ({
  type: CANCEL_ROCKET,
  id,
});

export default rocketReducer;
export { fetchRocketsFromApi, reserveRocket, cancelRocket };
