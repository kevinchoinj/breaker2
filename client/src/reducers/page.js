import {
  SET_DARK,
  SET_ID,
} from 'actions/page';

const DEFAULT_STATE={
  id: null,
  dark: true,
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case SET_ID:
    return state = {
      ...state,
      id: payload.id,
    };
  case SET_DARK:
    return state = {
      ...state,
      dark: payload.payload,
    };
  default:
    return state;
  }
};
