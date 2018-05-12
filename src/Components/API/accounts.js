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
  }).then(response => response.json());
};
