// From client
import io from 'socket.io-client';
import {messageTypes} from 'components/stream/messageTypes';

let socket = io('https://api.bb.johnpyp.net');

export const init = (store, rootURL) => {
  socket = io(rootURL)
  // add listeners to socket messages so we can re-dispatch them as actions
  Object.keys(messageTypes).forEach(key =>
    socket.on(key, data => {
      //const { type, payload } = data
      if (key === 'chat') {
        store.dispatch({type: 'RECEIVE_MESSAGE', data })
      }
    })
  )
}

export const emit = (type, payload) => socket && socket.emit(type, payload);

export const emitAction = (actionCreator) => {
  return (...args) => {
    const result = actionCreator.apply(this, args)
    socket.emit(result.key, {
      ...result.payload,
      type: result.type
    })
    return result
  }
}