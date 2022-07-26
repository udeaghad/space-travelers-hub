import {  combineReducers ,configureStore } from "@reduxjs/toolkit";
import rocketReducer from "./rockets/rockets";
import missionReducer from "./missions/missionReducer";

const rootReducer = combineReducers({
    Rockets: rocketReducer,
    Mission: missionReducer,
})

const store = configureStore({
    reducer : rootReducer
})

export default store;