import dateHelpers from "../HelperFunctions/dateHelpers";

const userInfo = {
  id: null,
  email: null,
  entries: null,
  accounts: null,
  dateCreated: null
};

const transactionFilters = {
  numMin: 60,
  numMax: 100,
  amountMin: 5,
  amountMax: 500,
  dateMin: "2018-01-01",
  dateMax: dateHelpers.dateHelpersJavaScript(new Date()),
  accountsIncluded: [],
  descriptionFilter: ""
};

const transactionContainer = {
  topRow: "new transaction", //view transactions
  showFilters: false,
  showDescriptions: true,
  showEditDelete: true,
  transactionFilters,
  formDebitFields: 1,
  formCreditFields: 1,
  transactionBalance: 0
};

const chartContainer = {
  chartType: "line",
  showSubcategories: [],
  goalComparison: false,
  hideInitial: true,
  beginDate: "2018-01-01",
  endDate: dateHelpers.dateHelpersJavaScript(new Date())
};

const accountContainer = {
  accountsToShow: [1, 2, 3, 4, 5, 6, 8, 9]
};

const goalContainer = {
  netWorth: {
    show: true,
    amount: 3,
    time: 100
  },
  assets: {
    show: true,
    amount: 3,
    time: 100
  },
  liabilities: {
    show: true,
    amount: 0.25,
    time: 100
  },
  netIncome: {
    show: true,
    amount: 200,
    time: 1
  },
  income: {
    show: true,
    amount: 300,
    time: 1
  },
  spending: {
    show: true,
    amount: 100,
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
