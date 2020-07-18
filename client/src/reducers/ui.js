import {
  SET_DARK,
  SET_TIMESTAMPS,
  SET_EXPANDED_CHAT,
} from 'actions/ui';

const DEFAULT_STATE={
  dark: true,
  timestamps: false,
  expandedChat: true,
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
  case SET_EXPANDED_CHAT:
    return state = {
      ...state,
      expandedChat: payload.payload,
    };
  default:
    return state;
  }
};
