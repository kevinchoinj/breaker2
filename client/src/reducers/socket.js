import {actions} from 'actions/socket';

const DEFAULT_STATE = {
  chat: [],
  rooms: []
}

export default (state = DEFAULT_STATE, payload) =>
{
  switch (payload.type) {
    case actions.JOIN_CHAT: {
      const session = payload.payload
      return state = {
        ...state,
        rooms: payload.payload,
      };
    }
    default:
      return state;
  }
}

