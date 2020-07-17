// From client
import io from 'socket.io-client'

let socket = io('https://api.bb.johnpyp.net');

// Helper to emit a redux action to our websocket server
export const emitAction = (actionCreator) => {
  return (...args) => {
    // This return the action object which gets sent to our backend
    // server via the socket connection
    const result = actionCreator.apply(this, args)
    socket.emit(result.key, {
      ...result.payload,
      type: result.type
    })
    return result
  }
}