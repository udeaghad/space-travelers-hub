
const FETCH_ROCKETS = 'space-travelers-hub/rockets/FETCH_ROCKETS';


const initialState = [];


const rocketReducer = (state = initialState , action) => {
    switch (action.type) {
        case FETCH_ROCKETS:
            return action.payload;
        default:
            return state;
    }
}

const fetchRocketsFromApi = ()=> async(dispatch) => {
    const data = await fetch('https://api.spacexdata.com/v3/rockets');
    const response = await data.json();
    console.log(response);
    dispatch(fetchRocket(response.map((rocket) => ({
         id:rocket.id,
         name:rocket.rocket_name ,
         type:rocket.rocket_type,
         description:rocket.description,
         image:rocket.flickr_images,
    }))))
}


const fetchRocket = (payload)=> ({
    type : FETCH_ROCKETS ,
    payload 
})

export default rocketReducer;
export { fetchRocketsFromApi };