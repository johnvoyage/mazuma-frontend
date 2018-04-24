const initialState = {
  userInfo: {
    id: null,
    email: null,
    ticker: null,
    // agreedToTerms: false,
  },
  formValidity: {
    // formInput: {},
    signUpForm: false,
  },
  transactionFilters: {
    transactionNumber: {
      min: 0,
      max: 100,
    },
    dates: {
      min: 0,
      max: 100,
    },
    accountNum: {
      min: 0,
      max: 9999,
    },
    amount: {
      min: 0,
      max: 10000,
    }


  },
  // loggedInUser: '',
  // loggedInPassword: '',
  // loggedIn: false,
  activeMenuItem: null,

};

export default initialState;
