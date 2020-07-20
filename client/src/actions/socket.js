import {keyMirror} from 'components/stream/keyMirror';
import { emitAction } from 'components/stream/emitAction';
import { messageTypes } from 'components/stream/messageTypes';

export const RECEIVE_MESSAGE = Symbol('RECEIVE_MESSAGE');

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
      timestamp: new Date().toISOString(),
      ...data
    }
  }
})

export const setUsername = emitAction((data) => {
  return {
    type: actions.SET_USERNAME,
    key: messageTypes.setUsername,
    payload: {
      timestamp: new Date().toISOString(),
      ...data
    }
  }
})

export const receiveMessage = (payload) => {
  return {
    type: RECEIVE_MESSAGE,
    payload,
  };
};
