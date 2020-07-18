import {
  FETCH_VIDEOS_SUCCEEDED,
} from 'actions/data';

const DEFAULT_STATE={
  videos: [],
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case FETCH_VIDEOS_SUCCEEDED:
    return state = {
      ...state,
      videos: payload?.data?.data?.vods,
    };
  default:
    return state;
  }
};
