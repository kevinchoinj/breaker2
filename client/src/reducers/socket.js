import {actions} from 'actions/socket';
import produce from 'immer';

const DEFAULT_STATE = {
  chat: [],
  room: [],
  username: '',
}

export default (state = DEFAULT_STATE, action) =>
  produce(state, draft => {
    switch(action.type){
      case actions.JOIN_CHAT:
        draft.room = action.payload;
        break;
      case actions.SET_USERNAME:
        draft.username = action.payload.username;
        break;
      case 'RECEIVE_MESSAGE':
        draft.chat.push(action.data);
        break;
      default:
        break;
    }
  }
);
