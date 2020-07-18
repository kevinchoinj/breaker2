import {
  SET_DARK,
  SET_ID,
  SET_TIMESTAMPS,
} from 'actions/page';

const DEFAULT_STATE={
  id: null,
  dark: true,
  timestamps: false,
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
  case SET_TIMESTAMPS:
    return state = {
      ...state,
      timestamps: payload.payload,
    };
  default:
    return state;
  }
};
