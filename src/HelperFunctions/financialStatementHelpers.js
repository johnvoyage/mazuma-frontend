const filterEntriesWithinDateRange = (arrayOfEntries, beginDate, endDate) => {
  return arrayOfEntries.filter(entry => {
    const entryDate = entry.date.slice(0, 10);
    return entryDate >= beginDate.toString() && entryDate <= endDate;
  });
};

const mapAccountIdsUsedInEntries = arrayOfEntries => {
  return arrayOfEntries.map(entry =>
    mapAccountIdsUsedInTransactions(entry.transactions)
  );
};

const mapAccountIdsUsedInTransactions = arrayOfTransactions => {
  return arrayOfTransactions.map(transaction => transaction.account_id);
};

const reduceNestedArrayOfAccountIds = nestedArrayOfAccountIds => {
  return nestedArrayOfAccountIds.reduce((aggr, arrayOfAccountIds) => {
    arrayOfAccountIds.forEach(
      accountId => (aggr.indexOf(accountId) < 0 ? aggr.push(accountId) : null)
    );
    return aggr;
  }, []);
};

const mapArrayOfAccountIdsToAccountObjects = (
  arrayOfAccountIds,
  arrayOfAccounts
) => {
  return arrayOfAccountIds.map(accountId =>
    accountIdToAccountObject(accountId, arrayOfAccounts)
  );
};

const accountIdToAccountObject = (accountId, arrayOfAccounts) => {
  return arrayOfAccounts.filter(account => account.id === accountId)[0];
};

const filterAccountsOfSubcategoryId = (subcategoryId, arrayOfAccounts) => {
  return arrayOfAccounts.filter(
    account => account.subcategory_id === subcategoryId
  );
};

const mapTransactionsOfEntries = arrayOfEntries => {
  return arrayOfEntries.map(entry => entry.transactions);
};

const reduceNestedArrayOfTransactionsToNumber = (
  accountId,
  nestedArrayOfTransactions
) => {
  return nestedArrayOfTransactions.reduce((aggr, arrayOfTransactions) => {
    arrayOfTransactions.forEach(
      transaction => (transaction.account_id === accountId ? aggr++ : null)
    );
    return aggr;
  }, 0);
};

const reduceNestedArrayOfTransactionsToAmount = (
  accountId,
  nestedArrayOfTransactions
) => {
  return nestedArrayOfTransactions.reduce((aggr, arrayOfTransactions) => {
    arrayOfTransactions.forEach(
      transaction =>
        transaction.account_id === accountId
          ? (aggr += parseFloat(transaction.amount))
          : null
    );
    return aggr;
  }, 0);
};

const filterAccountIdsOfSubcategories = (
  arrayOfSubcategoryIds,
  arrayOfAccounts
) => {
  // console.log(arrayOfSubcategoryIds);
  // console.log(arrayOfAccounts);
  return arrayOfAccounts
    .filter(
      account => arrayOfSubcategoryIds.indexOf(account.subcategory_id) > -1
    )
    .map(account => account.id);
};

export default {
  filterEntriesWithinDateRange,
  mapAccountIdsUsedInEntries,
  reduceNestedArrayOfAccountIds,
  mapArrayOfAccountIdsToAccountObjects,
  filterAccountsOfSubcategoryId,
  mapTransactionsOfEntries,
  reduceNestedArrayOfTransactionsToNumber,
  reduceNestedArrayOfTransactionsToAmount,
  filterAccountIdsOfSubcategories
};
