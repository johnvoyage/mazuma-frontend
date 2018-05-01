const initialState = {
  loading: false,
  activeMenuItem: "Mazuma",
  userInfo: {
    id: null,
    email: null,
    entries: null,
    accounts: null,
    dateCreated: null,
    firstTimeLoaded: false
  },
  // formInput: {
  //   signUpForm: {},
  //   signInForm: {},
  //   newTransactionForm: {},
  // },
  formInput: {},
  transactionContainer: {
    descriptionToggle: true,
    filterSelected: "none",
    newTransaction: false,
    newAccount: false,
    formDebitFields: 1,
    formCreditFields: 1,
    transactionBalance: 0
  },
  incomeStatementContainer: {
    beginDate: null,
    endDate: new Date()
  },
  netWorthContainer: {
    asOfDate: new Date()
  }
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
