export const fetchUsers = () => {
  return dispatch => {
    dispatch({ type: "LOADING" });
    return fetch("")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", json });
      });
  };
};
