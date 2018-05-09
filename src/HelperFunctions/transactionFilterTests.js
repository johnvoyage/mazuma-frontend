const passesTransactionFilterTests = (entry, filters) => {
  console.log(entry);
  console.log(filters);
  const entryMax = entryMaxNum(entry);
  const entryMin = entryMinNum(entry);
  return (
    transactionMinTest(entry.number, filters.numMin) &&
    transactionMaxTest(entry.number, filters.numMax) &&
    amountMinTest(entryMin, filters.amountMin)
    // amountMinTest(entryMax, filters.amountMax)

    // amountMaxTest()
    // dateMinTest()
    // dateMaxTest()
    // accountsIncludedTest()
    // descriptionTest()
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
  return entryMin < filterMin;
};

export default {
  passesTransactionFilterTests
};
