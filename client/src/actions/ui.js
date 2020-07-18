export const SET_DARK = Symbol('SET_DARK');
export const SET_TIMESTAMPS = Symbol('SET_TIMESTAMPS');
export const SET_EXPANDED_CHAT = Symbol('SET_EXPANDED_CHAT');

export const setDark = (payload) =>{
  return {
    type: SET_DARK,
    payload,
  };
};
export const setTimestamps = (payload) =>{
  return {
    type: SET_TIMESTAMPS,
    payload,
  };
};
export const setExpandedChat = (payload) =>{
  return {
    type: SET_EXPANDED_CHAT,
    payload,
  };
};
