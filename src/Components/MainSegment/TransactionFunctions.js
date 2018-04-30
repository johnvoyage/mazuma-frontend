const totalNetIncome = (entries, accounts) => {
  return entries.reduce((aggr, entry) => {
    console.log(aggr)
    return aggr + netIncomeOfTransaction(entry.transactions, accounts)
  }, 0)
}

const netIncomeOfTransaction = (arrayOfTransactions, arrayOfAccounts) => {
  return arrayOfTransactions.reduce((aggr, transaction) => {
    if (trueIfIncomeAccount(transaction.account_id, arrayOfAccounts) && trueIfInTimeframe()) {
      return aggr + parseFloat(transaction.amount)
    } else {
      return aggr
    }
  }, 0)
}

const trueIfIncomeAccount = (accountId, arrayOfAccounts) => {
  for (const account of arrayOfAccounts) {
    if (account.id === accountId && account.subcategory_id >= 8) {
      return true
    }
  }
  return false
}

const trueIfInTimeframe = () => {
  return true
}

export {
  totalNetIncome
}
