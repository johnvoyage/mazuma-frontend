const passesTransactionFilterTests = (entry, filters) => {
  const entryMax = entryMaxNum(entry);
  const entryMin = entryMinNum(entry);
  const entrysAccounts = entrysAccountsArray(entry);
  return !transactionMinTest(entry.number, filters.numMin)
    ? false
    : !transactionMaxTest(entry.number, filters.numMax)
      ? false
      : !amountMinTest(entryMin, filters.amountMin)
        ? false
        : !amountMaxTest(entryMax, filters.amountMax)
          ? false
          : !dateMinTest(entry.date, filters.dateMin)
            ? false
            : !dateMaxTest(entry.date, filters.dateMax)
              ? false
              : !descriptionTest(entry.description, filters.descriptionFilter)
                ? false
                : !accountsIncludedTest(
                    entrysAccounts,
                    filters.accountsIncluded
                  )
                  ? false
                  : true;
};

const entryMaxNum = entry => {
  return entry.transactions.reduce((aggr, transaction) => {
    const amount =
      transaction.amount[0] === "("
        ? transaction.amount.slice(1, -1)
        : transaction.amount;
    return Math.abs(parseFloat(amount)) > aggr
      ? Math.abs(parseFloat(amount))
      : aggr;
  }, 0);
};

const entryMinNum = entry => {
  return entry.transactions.reduce((aggr, transaction) => {
    const amount =
      transaction.amount[0] === "("
        ? transaction.amount.slice(1, -1)
        : transaction.amount;
    return Math.abs(parseFloat(amount)) < aggr
      ? Math.abs(parseFloat(amount))
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
  if (filtersDescription.length === 0 && filtersDescription !== "") {
    return false;
  } else {
    return entryDescription
      .toLowerCase()
      .includes(filtersDescription.toLowerCase());
  }
};

const entrysAccountsArray = entry => {
  return entry.transactions.map(transaction => transaction.account);
};

const accountsIncludedTest = (entrysAccounts, filtersAccounts) => {
  let truthiness = true;
  if (filtersAccounts.length === 0) {
    return true;
  } else {
    filtersAccounts.forEach(account => {
      if (!entrysAccounts.includes(account)) {
        truthiness = false;
      }
    });
  }
  return truthiness;
};

export default {
  passesTransactionFilterTests
};
