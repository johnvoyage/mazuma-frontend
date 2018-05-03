// import
const token = localStorage.getItem("token");

// export const createAccount = (
//   name,
//   description,
//   subcategory_id,
//   user_id /*, tickerSymbol*/
// ) => {
//   return fetch(`http://localhost:3000/accounts/`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accepts: "application/json",
//       Authorization: token
//     },
//     body: JSON.stringify({
//       name,
//       description,
//       subcategory_id,
//       user_id
//     })
//   }).then(response => response.json());
// };

export const createAccount = (name, description, subcategory_id, user_id) => {
  // console.log("here?");
  // debugger;
  return dispatch => {
    dispatch({ type: "ASYNC_START" });
    return fetch(`http://localhost:3000/accounts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        name,
        description,
        subcategory_id,
        user_id
      })
    })
      .then(response => response.json())
      .then(json => dispatch({ type: "NEW_ACCOUNT", payload: json }));
  };
};
// console.log(json);
//
// dispatch({ type: "NEW_ACCOUNT", payload: json });
