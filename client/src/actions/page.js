export const SET_ID = Symbol('SET_ID');
export const SET_DARK = Symbol('SET_DARK');
export const SET_TIMESTAMPS = Symbol('SET_TIMESTAMPS');

export const setId = (id) =>{
  return {
    type: SET_ID,
    id,
  };
};

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
