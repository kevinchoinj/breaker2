// actions.js
import {keyMirror} from 'components/stream/keyMirror';
import { emitAction } from 'components/stream/emitAction';
import { messageTypes } from 'components/stream/messageTypes';

export const actions = keyMirror(
  'JOIN_CHAT',
)

export const joinChat = emitAction((data) => {
  return {
    type: actions.JOIN_CHAT,
    key: messageTypes.joinChat,
    payload: {
      slug: 'SystemNameUntil',
      timestamp: new Date().toISOString(),
      ...data
    }
  }
})
