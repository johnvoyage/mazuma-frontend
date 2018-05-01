let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
today = `${yyyy}-${mm}-${dd}`;

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
  netIncomeContainer: {
    beginDate: "2000-01-01",
    endDate: today
  },
  netWorthContainer: {
    asOfDate: today
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
