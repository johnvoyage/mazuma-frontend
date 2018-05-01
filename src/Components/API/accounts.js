// import
const token = localStorage.getItem("token");

export const createAccount = (
  name,
  description,
  subcategory_id,
  user_id /*, tickerSymbol*/
) => {
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

// create_table "accounts", force: :cascade do |t|
//   t.string "name"
//   t.text "description"
//   t.integer "subcategory_id"
//   t.integer "user_id"
