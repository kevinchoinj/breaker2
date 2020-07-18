import {
  SET_DARK,
  SET_TIMESTAMPS,
} from 'actions/ui';

const DEFAULT_STATE={
  dark: true,
  timestamps: false,
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
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
