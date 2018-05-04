import { todayFormatted } from "../StaticOptions/currentDate";

const userInfo = {
  id: null,
  email: null,
  entries: null,
  accounts: null,
  dateCreated: null
};

const transactionContainer = {
  topRow: "view transactions",
  showFilters: false,
  showDescriptions: true,
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

const whole = {
  loading: false,
  activeMenuItem: "Mazuma",
  userInfo,
  // formInput: {},
  transactionContainer,
  netIncomeContainer: {
    beginDate: "2000-01-01",
    endDate: todayFormatted
  },
  netWorthContainer: {
    asOfDate: todayFormatted
  }
};

export default {
  whole
};
