const totalForSubcategory = (entries, accounts, subcategoryId) => {
  return entries.reduce((aggr, entry) => {
    return aggr + netIncomeOfTransaction(entry.transactions, accounts, subcategoryId)
  }, 0)
}

const netIncomeOfTransaction = (arrayOfTransactions, arrayOfAccounts, subcategoryId) => {
  return arrayOfTransactions.reduce((aggr, transaction) => {
    if (trueIfSubcategoryMatch(transaction.account_id, arrayOfAccounts, subcategoryId) && trueIfInTimeframe()) {
      return aggr + parseFloat(transaction.amount)
    } else {
      return aggr
    }
  }, 0)
}

const trueIfSubcategoryMatch = (accountId, arrayOfAccounts, subcategoryId) => {
  for (const account of arrayOfAccounts) {
    if (account.id === accountId && account.subcategory_id === subcategoryId) {
      return true
    }
  }
  return false
}

const trueIfInTimeframe = () => {
  return true
}

const filterAccountsOfSubcategoryId = (arrayOfAccounts, subcategoryId) => {
  return arrayOfAccounts.filter(account => account.subcategory_id === 8)
}

export {
  totalForSubcategory,
  filterAccountsOfSubcategoryId
}
