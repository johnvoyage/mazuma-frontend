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
    show: true,
    amount: 5,
    time: 100
  },
  assets: {
    show: true,
    amount: 6,
    time: 100
  },
  liabilities: {
    show: true,
    amount: 2.5,
    time: 100
  },
  netIncome: {
    show: true,
    amount: 50,
    time: 1
  },
  income: {
    show: true,
    amount: 100,
    time: 1
  },
  spending: {
    show: true,
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
