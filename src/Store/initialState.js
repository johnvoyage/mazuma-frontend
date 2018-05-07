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
  beginDate: "2018-01-01",
  endDate: dateHelpers.dateHelpersJavaScript(new Date())
};

const whole = {
  loading: false,
  activeMenuItem: "Mazuma",
  userInfo,
  // formInput: {},
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
