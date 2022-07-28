import { createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const GET_ALL_MISSION = 'GET_ALL_MISSION';

const JOIN_MISSION = 'JOIN_MISSION';

const getMissions = createAsyncThunk(
  GET_ALL_MISSION,
  async () => {
    const request = new Request(`${baseUrl}`);
    const response = await fetch(request);
    const result = await response.json();

    const missionDetails = [];
    result.forEach((mission) => {
      const { description, mission_name, mission_id } = mission;
      missionDetails.push({
        description, mission_name, mission_id, join_mission: false,
      });
    });

    return missionDetails;
  },
);

const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export { getMissions, joinMission };
