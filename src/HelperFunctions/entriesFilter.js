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

const subcategoryIdToName = subcategoryId => {
  switch (subcategoryId) {
    case 1:
      return "Liquid Assets";
    case 2:
      return "Tangible Assets";
    case 3:
      return "Intangible Assets";
    case 4:
      return "Long-Term Assets";
    case 5:
      return "Short-Term Liability";
    case 6:
      return "Long-Term Liability";
    case 8:
      return "Earning";
    case 9:
      return "Spending";
    default:
      return "Category not named";
  }
};

export default {
  filterEntriesWithinDateRange,
  mapAccountIdsUsedInEntries,
  reduceNestedArrayOfAccountIds,
  mapArrayOfAccountIdsToAccountObjects,
  filterAccountsOfSubcategoryId,
  subcategoryIdToName
};
