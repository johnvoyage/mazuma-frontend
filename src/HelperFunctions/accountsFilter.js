const filterAccountsOfSubcategoryId = (
  arrayOfAccounts,
  subcategoryId
  // endDate,
  // entryDate
) => {
  return arrayOfAccounts.filter(account => {
    return account.subcategory_id === subcategoryId;
  });
};

export default {
  filterAccountsOfSubcategoryId: filterAccountsOfSubcategoryId
};
