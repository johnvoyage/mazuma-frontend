// import financialStatementHelpers from "./financialStatementHelpers";
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
  console.log(endDate);
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

// const amountOfEntriesGivenSubcategories = arrayOfSubcategoryIds => {
//   const accountIdsOfSubcategoriesArray = financialStatementHelpers.filterAccountIdsOfSubcategories(
//     arrayOfSubcategoryIds,
//     props.accounts
//   );
//   return financialStatementHelpers
//     .mapTransactionsOfEntries(
//       financialStatementHelpers.filterEntriesWithinDateRange(
//         props.entries,
//         props.beginDate,
//         props.endDate
//       )
//     )
//     .reduce((aggr, arrayOfTransactions) => {
//       arrayOfTransactions.forEach(transaction => {
//         return accountIdsOfSubcategoriesArray.indexOf(transaction.account_id) >
//           -1
//           ? (aggr += parseFloat(transaction.amount))
//           : null;
//       });
//       return aggr;
//     }, 0);
// };

// const netWorth = (beginDate, endDate, entries, accounts) => {
//   return dateHelpers
//     .arrayOfDatesWithEntries(beginDate, endDate, entries)
//     .map(date => {
//       const amountOfEntriesGivenSubcategories = () => {
//         const accountIdsOfSubcategoriesArray = financialStatementHelpers.filterAccountIdsOfSubcategories(
//           [1, 2, 3, 4, 5, 6],
//           accounts
//         );
//         return financialStatementHelpers
//           .mapTransactionsOfEntries(
//             financialStatementHelpers.filterEntriesWithinDateRange(
//               entries,
//               "0",
//               date
//             )
//           )
//           .reduce((aggr, arrayOfTransactions) => {
//             arrayOfTransactions.forEach(transaction => {
//               return accountIdsOfSubcategoriesArray.indexOf(
//                 transaction.account_id
//               ) > -1
//                 ? (aggr += parseFloat(transaction.amount))
//                 : null;
//             });
//             return aggr;
//           }, 0);
//       };
//       return amountOfEntriesGivenSubcategories();
//     });
// };

export default {
  // netWorth
  arrayOfDatesWithEntries,
  arrayOfAccountsBelongingToSubcategoryIds
};
