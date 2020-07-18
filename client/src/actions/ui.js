export const SET_DARK = Symbol('SET_DARK');
export const SET_TIMESTAMPS = Symbol('SET_TIMESTAMPS');

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
