const API_ROOT = `http://localhost:3000`;

const token = localStorage.getItem('token')

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  Authorization: token
};

const login = (email, password) => {
  // debugger
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

const signUserUp = (email, password /*, tickerSymbol*/) => {
  // debugger
  return fetch(`${API_ROOT}/users/`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      email,
      password,
      // tickerSymbol
    })
  }).then(response => response.json())
};

const deleteUserAccount = (accountId) => {
  // console.log('in api del user acct')
  // const userId = 2
  return fetch(`${API_ROOT}/users/${accountId}`, {
    method: 'DELETE',
    headers: headers,
  }).then(response => response.json())
}

// const editUserAccount = (accountId) => {
//   return fetch(`${API_ROOT}/users/${accountId}`, {
//     method: 'PATCH',
//     headers: headers,
//     body: JSON.stringify({
//       // email,
//       // password,
//     })
//   }).then(response => response.json())
// }

const createEntry = (date, description, userId) => {
  return fetch(`${API_ROOT}/entries/`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      date: date,
      description: description,
      user_id: userId,
    })
  }).then(response => response.json())
}

const allUsersAccounts = (userId) => {
  return fetch(`${API_ROOT}/users/${userId}/accounts/`)
    .then(response => response.json())
    // .then(json => console.log(json))
}

export default {
  auth: {
    login,
    getCurrentUser,
    signUserUp,
    deleteUserAccount,
    // editUserAccount
  },
  accounts: {
    allUsersAccounts,
  },
  entries: {
    createEntry,
    // readEntry,
    // updateEntry,
    // destroyEntry,
  }
  // transactions: {
  //   getTransactions
  // }
};
