const totalForSubcategory = (entries, accounts, arrayOfSubcategories) => {
  return entries.reduce((aggr, entry) => {
    return aggr + netIncomeOfTransactionGivenSubcategoryId(entry.transactions, accounts, arrayOfSubcategories)
  }, 0)
}

const netIncomeOfTransactionGivenSubcategoryId = (arrayOfTransactions, arrayOfAccounts, arrayOfSubcategories) => {
  return arrayOfTransactions.reduce((aggr, transaction) => {
    if (trueIfSubcategoryMatch(transaction.account_id, arrayOfAccounts, arrayOfSubcategories) && trueIfInTimeframe()) {
      return aggr + parseFloat(transaction.amount)
    } else {
      return aggr
    }
  }, 0)
}

const trueIfSubcategoryMatch = (accountId, arrayOfAccounts, arrayOfSubcategories) => {
  for (const account of arrayOfAccounts) {
    if (account.id === accountId && arrayOfSubcategories.indexOf(account.subcategory_id) !== -1) {
      return true
    }
  }
  return false
}

const trueIfInTimeframe = () => {
  return true
}

const filterAccountsOfSubcategoryId = (arrayOfAccounts, subcategoryId) => {
  return arrayOfAccounts.filter(account => account.subcategory_id === subcategoryId)
}

const totalGivenAccountId = (arrayOfEntries, accountId) => {
  return arrayOfEntries.reduce((aggr, entry) => {
    return aggr + netIncomeOfTransactionGivenAccountId(entry.transactions, accountId)
  }, 0)
}

const netIncomeOfTransactionGivenAccountId = (arrayOfTransactions, accountId) => {
  return arrayOfTransactions.reduce((aggr, transaction) => {
    if (transaction.account_id === accountId) {
      return aggr + parseFloat(transaction.amount)
    } else {
      return aggr
    }
  }, 0)
}

const numberOfEntriesGivenAccountId = (arrayOfEntries, accountId) => {
  return arrayOfEntries.reduce((aggr, entry) => {
    return aggr + numberOfTimesAccountUsedInEntry(entry.transactions, accountId)
  }, 0)
}

const numberOfTimesAccountUsedInEntry = (arrayOfTransactions, accountId) => {
  return arrayOfTransactions.reduce((aggr, transaction) => {
    if (transaction.account_id === accountId) {
      return aggr + 1
    } else {
      return aggr
    }
  }, 0)
}

const subcategoryIdToName = (subcategoryId) => {
  switch (subcategoryId) {
    case 1:
      return 'Liquid Assets'
    case 2:
      return 'Tangible Assets'
    case 3:
      return 'Intangible Assets'
    case 4:
      return 'Long-Term Assets'
    case 5:
      return 'Short-Term Liability'
    case 6:
      return 'Long-Term Liability'
    case 8:
      return 'Earning'
    case 9:
      return 'Spending'
    default:
      return 'Category not named'
  }
}

export {
  totalForSubcategory,
  filterAccountsOfSubcategoryId,
  totalGivenAccountId,
  numberOfEntriesGivenAccountId,
  subcategoryIdToName
}
