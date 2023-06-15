//To trigger the actions used in the app.js, actions are moved to reducers only after triggering
export const IncAction = (value) => async (dispatch) => {
  //it should be dispatched in the form of object
  dispatch({
    type: "INCREMENT",
    payload: value,
  });
};

export const DecAction = () => async (dispatch) => {
  dispatch({
    type: "DECREMENT",
  });
};
