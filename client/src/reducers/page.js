import {
  SET_ID,
} from 'actions/page';

const DEFAULT_STATE={
  id: null,
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case SET_ID:
    return state = {
      ...state,
      id: payload.id,
    };
  default:
    return state;
  }
};
