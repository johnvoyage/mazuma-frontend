const API_ROOT = `http://localhost:3000`;

const token = localStorage.getItem('token')

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: token
};

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

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user/`, {
    headers: headers,
  }).then(response => response.json())
};

const signUserUp = (email, password, tickerSymbol) => {
  return fetch(`${API_ROOT}/users/`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      email,
      password,
      tickerSymbol
    })
  }).then(response => response.json())
}

export default {
  auth: {
    login,
    getCurrentUser,
    signUserUp
  },
  // transactions: {
  //   getTransactions
  // }
};
