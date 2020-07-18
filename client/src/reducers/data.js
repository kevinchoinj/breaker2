import {
  FETCH_VIDEOS_SUCCEEDED,
  FETCH_LIVE_SUCCEEDED,
  FETCH_LIVE_FALSE,
  FETCH_LIVE_FAILURE,
} from 'actions/data';

const DEFAULT_STATE={
  videos: [],
  live: false,
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case FETCH_VIDEOS_SUCCEEDED:
    return state = {
      ...state,
      videos: payload?.data?.data?.vods,
    };
  case FETCH_LIVE_SUCCEEDED:
    return state = {
      ...state,
      live: "live",
    };
  case FETCH_LIVE_FALSE:
    return state = {
      ...state,
      live: "notLive",
    };
  case FETCH_LIVE_FAILURE:
    return state = {
      ...state,
      live: "notExists",
    };
  default:
    return state;
  }
};
