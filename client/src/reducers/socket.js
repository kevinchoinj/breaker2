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
        console.log(draft.chat.length, 'LENGTH')
        if (draft.chat.length < 50) {
          draft.chat.push({...action.data, timestamp: Date.now()});
        }
        else {
          draft.chat.push({...action.data, timestamp: Date.now()});
          draft.chat.shift();
        }
        break;
      default:
        break;
    }
  }
);
