import {actions} from 'actions/socket';
import produce from 'immer';

const DEFAULT_STATE = {
  chat: [],
  room: []
}

export default (state = DEFAULT_STATE, action) =>
  produce(state, draft => {
    switch(action.type){
      case actions.JOIN_CHAT:
        draft.room = action.payload;
        break;
      case 'RECEIVE_MESSAGE':
        draft.chat.push(action.data);
        break;
      default:
        break;
    }
  }
);
