import dateHelpers from "./dateHelpers";

const arrayOfEntryDates = entries => {
  return entries.map(entry => {
    return dateHelpers.dateSymbolReplace(entry.date.slice(0, 10), "-", "/");
  });
};

const arrayOfDatesWithEntries = (beginDate, endDate, entries) => {
  const arrayOfDates = [];
  const arrayOfDatesWithEntries = arrayOfEntryDates(entries);
  let currentDate = beginDate;
  while (new Date(currentDate) <= new Date(endDate)) {
    if (arrayOfDatesWithEntries.indexOf(currentDate) > -1) {
      arrayOfDates.push(currentDate);
    }
    currentDate = dateHelpers.tomorrow(currentDate);
  }
  arrayOfDates.push(dateHelpers.dateSymbolReplace(endDate, "-", "/"));
  return arrayOfDates;
};

const arrayOfAccountsBelongingToSubcategoryIds = (
  arrayOfSubcategoryIds,
  arrayOfAccounts
) => {
  return arrayOfAccounts.filter(
    account => arrayOfSubcategoryIds.indexOf(account.subcategory_id) > -1
  );
};

const arrayOfDates = (beginDate, endDate) => {
  const arrayOfDates = [];
  let currentDate = beginDate;
  while (new Date(currentDate) <= new Date(endDate)) {
    arrayOfDates.push(currentDate);
    currentDate = dateHelpers.tomorrow(currentDate);
  }
  arrayOfDates.push(dateHelpers.dateSymbolReplace(endDate, "-", "/"));
  return arrayOfDates;
};

export default {
  arrayOfDatesWithEntries,
  arrayOfDates,
  arrayOfAccountsBelongingToSubcategoryIds
};
