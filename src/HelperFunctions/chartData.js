import financialStatementHelpers from "./financialStatementHelpers";

const netWorth = (beginDate, endDate, entries, accounts) => {
  const accountIdsOfSubcategoriesArray = financialStatementHelpers.filterAccountIdsOfSubcategories(
    [1, 2, 3, 4, 5, 6],
    accounts
  );
  // return
  console.log(
    financialStatementHelpers
      .mapTransactionsOfEntries(
        financialStatementHelpers.filterEntriesWithinDateRange(
          entries,
          beginDate,
          endDate
        )
      )
      .reduce((aggr, arrayOfTransactions) => {
        arrayOfTransactions.forEach(transaction => {
          return accountIdsOfSubcategoriesArray.indexOf(
            transaction.account_id
          ) > -1
            ? (aggr += parseFloat(transaction.amount))
            : null;
        });
        return aggr;
      }, 0)
  );

  return [65, 59, 80, 81, 56, 55, 40];
};

// const amountOfEntriesGivenSubcategories = arrayOfSubcategoryIds => {
//   const accountIdsOfSubcategoriesArray = financialStatementHelpers.filterAccountIdsOfSubcategories(
//     arrayOfSubcategoryIds,
//     props.accounts
//   );
//   return formatNumber.withoutCents(
//     financialStatementHelpers
//       .mapTransactionsOfEntries(
//         financialStatementHelpers.filterEntriesWithinDateRange(
//           props.entries,
//           props.beginDate,
//           props.endDate
//         )
//       )
//       .reduce((aggr, arrayOfTransactions) => {
//         arrayOfTransactions.forEach(transaction => {
//           return accountIdsOfSubcategoriesArray.indexOf(
//             transaction.account_id
//           ) > -1
//             ? (aggr += parseFloat(transaction.amount))
//             : null;
//         });
//         return aggr;
//       }, 0),
//     " $ "
//   );
// };

export default {
  netWorth
};
