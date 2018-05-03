import { todayFormatted } from "../StaticOptions/currentDate";

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
    // descriptionToggle: true,
    // filterSelected: "none",
    // viewTransactions: true,
    // newTransaction: false,
    // newAccount: false,
    topRow: "view transactions",
    showFilters: false,
    showDescriptions: false,
    transactionFilters: {
      numMin: null,
      numMax: null,
      amountMin: null,
      amountMax: null,
      dateMin: null,
      dateMax: null,
      accountsIncluded: [],
      descriptionFilter: null
    },
    formDebitFields: 1,
    formCreditFields: 1,
    transactionBalance: 0
  },
  netIncomeContainer: {
    beginDate: "2000-01-01",
    endDate: todayFormatted
  },
  netWorthContainer: {
    asOfDate: todayFormatted
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
