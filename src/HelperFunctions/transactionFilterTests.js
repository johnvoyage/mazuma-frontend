const passesTransactionFilterTests = (entry, filters) => {
  const entryMax = entryMaxNum(entry);
  const entryMin = entryMinNum(entry);
  const entrysAccounts = entrysAccountsArray(entry);
  console.log(entrysAccounts);
  return (
    transactionMinTest(entry.number, filters.numMin) &&
    transactionMaxTest(entry.number, filters.numMax) &&
    amountMinTest(entryMin, filters.amountMin) &&
    amountMaxTest(entryMax, filters.amountMax) &&
    dateMinTest(entry.date, filters.dateMin) &&
    dateMaxTest(entry.date, filters.dateMax) &&
    accountsIncludedTest(entrysAccounts, filters.accountsIncluded) &&
    descriptionTest(entry.description, filters.descriptionFilter)
  );
};

const entryMaxNum = entry => {
  return entry.transactions.reduce((aggr, transaction) => {
    return Math.abs(parseFloat(transaction.amount)) > aggr
      ? Math.abs(parseFloat(transaction.amount))
      : aggr;
  }, 0);
};

const entryMinNum = entry => {
  return entry.transactions.reduce((aggr, transaction) => {
    return Math.abs(parseFloat(transaction.amount)) < aggr
      ? Math.abs(parseFloat(transaction.amount))
      : aggr;
  }, 9999999);
};

const transactionMinTest = (transactionNum, transactionMin) => {
  return transactionNum >= transactionMin;
};

const transactionMaxTest = (transactionNum, transactionMax) => {
  return transactionNum <= transactionMax;
};

const amountMinTest = (entryMin, filterMin) => {
  return entryMin >= filterMin;
};

const amountMaxTest = (entryMax, filterMax) => {
  return entryMax <= filterMax;
};

const dateMinTest = (entryDate, filterDateMin) => {
  return (
    new Date(entryDate) >=
    new Date(
      `${filterDateMin.slice(5, 7)}-${filterDateMin.slice(
        -2
      )}-${filterDateMin.slice(0, 4)}`
    )
  );
};

const dateMaxTest = (entryDate, filterDateMax) => {
  return (
    new Date(entryDate) <=
    new Date(
      `${filterDateMax.slice(5, 7)}-${filterDateMax.slice(
        -2
      )}-${filterDateMax.slice(0, 4)}`
    )
  );
};

const descriptionTest = (entryDescription, filtersDescription) => {
  return entryDescription
    .toLowerCase()
    .includes(filtersDescription.toLowerCase());
};

const entrysAccountsArray = entry => {
  return entry.transactions.map(transaction => transaction.account);
};

const accountsIncludedTest = (entrysAccounts, filtersAccounts) => {
  if (filtersAccounts.length === 0) {
    return true;
  } else {
    filtersAccounts.forEach(account => {
      if (entrysAccounts.includes(account)) {
        return true;
      }
    });
  }
  return false;
};

export default {
  passesTransactionFilterTests
};
