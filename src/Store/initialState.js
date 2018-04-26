const initialState = {
  activeMenuItem: null,
  userInfo: {
    id: null,
    email: null,
    entries: null,
    accounts: null,
    transactions: null,
  },
  // formInput: {
  //   signUpForm: {},
  //   signInForm: {},
  //   newTransactionForm: {},
  // },
  transactionContainer: {
    descriptionToggle: true,
    filterSelected: 'none',
    newTransaction: false,
    newAccount: false,
    formDebitFields: 1,
    formCreditFields: 1,
    transactionBalance: 0,
  },
  spendingContainer: {

  },
  // accounts: null,
  // netWorthContainer: {
  //   assets: {
  //     showSubCategories: {
  //       showLiquid: true,
  //       showTangible: true,
  //       showIntangible: true,
  //       showLongTerm: true,
  //     },
  //     showAccounts: {
  //       showLiquid: true,
  //       showTangible: true,
  //       showIntangible: true,
  //       showLongTerm: true,
  //     }
  //   },
  //   liabilities: {
  //     showSubCategories: true,
  //     showAccounts: false,
  //   },
  //
  // },

};

export default initialState;
