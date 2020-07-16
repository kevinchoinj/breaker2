export const SET_ID = Symbol('SET_ID');
export const SET_DARK = Symbol('SET_DARK');

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
