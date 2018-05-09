import dateHelpers from "../HelperFunctions/dateHelpers";

const userInfo = {
  id: null,
  email: null,
  entries: null,
  accounts: null,
  dateCreated: null
};

const transactionContainer = {
  topRow: "new transaction", //view transactions
  showFilters: false,
  showDescriptions: true,
  showEditDelete: true,
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
};

const chartContainer = {
  chartType: "line",
  showSubcategories: [],
  goalComparison: true,
  hideInitial: true,
  beginDate: "2018-01-01",
  endDate: dateHelpers.dateHelpersJavaScript(new Date())
};

const accountContainer = {
  accountsToShow: [1, 2, 3, 4, 5, 6, 8, 9]
};

const goalContainer = {
  netWorth: {
    show: false,
    amount: 5,
    time: 100
  },
  assets: {
    show: false,
    amount: 6,
    time: 100
  },
  liabilities: {
    show: false,
    amount: 2.5,
    time: 100
  },
  netIncome: {
    show: false,
    amount: 50,
    time: 1
  },
  income: {
    show: false,
    amount: 100,
    time: 1
  },
  spending: {
    show: false,
    amount: 35,
    time: 1
  }
};

const whole = {
  loading: false,
  activeMenuItem: "Mazuma",
  userInfo,
  accountContainer,
  goalContainer,
  transactionContainer,
  netIncomeContainer: {
    beginDate: "2018-01-01",
    endDate: dateHelpers.dateHelpersJavaScript(new Date())
  },
  netWorthContainer: {
    asOfDate: dateHelpers.dateHelpersJavaScript(new Date())
  },
  chartContainer
};

export default {
  whole
};
