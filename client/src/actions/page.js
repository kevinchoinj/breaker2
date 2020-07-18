export const SET_ID = Symbol('SET_ID');

export const setId = (id) =>{
  return {
    type: SET_ID,
    id,
  };
};
