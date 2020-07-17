// actions.js
import {keyMirror} from 'components/stream/keyMirror';
import { emitAction } from 'components/stream/emitAction';
import { messageTypes } from 'components/stream/messageTypes';

export const actions = keyMirror(
  'JOIN_CHAT',
  'CHAT',
  'SET_USERNAME',
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


export const chat = emitAction((data) => {
  return {
    type: actions.CHAT,
    key: messageTypes.chat,
    payload: {
      slug: 'SystemNameUntil',
      message: data.message,
      timestamp: new Date().toISOString(),
      ...data
    }
  }
})

export const setUsername = emitAction((data) => {
  console.log(data);
  return {
    type: actions.SET_USERNAME,
    key: messageTypes.setUsername,
    payload: {
      slug: 'SystemNameUntil',
      username: data,
      timestamp: new Date().toISOString(),
      ...data
    }
  }
})
