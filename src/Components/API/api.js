const API_ROOT = `http://localhost:3000`;

const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
};

// const getTransactions = () => {
//   return fetch...
// }

const login = (email, password) => {
  return fetch(`${API_ROOT}/auth/`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      email,
      password
    })
  }).then(response => response.json())
};

export default {
  auth: {
    login
  },
  // transactions: {
  //   getTransactions
  // }
};
