import api from "../API/api";

export const fetchUsers = () => {
  return dispatch => {
    dispatch({ type: "ASYNC_START" });
    return fetch("")
      .then(response => response.json())
      .then(json => {
        console.log(json);
        // dispatch({ type: "DATA_LOADED", json });
      });
  };
};
