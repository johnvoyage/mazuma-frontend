import api from "../API/api";

const currentDebits = {};
const currentCredits = {};
const transactions = [];

// const calcCreditOrDebitBalance = creditOrDebit => {
//   const balanceCheck = creditOrDebit === "cr" ? currentCredits : currentDebits;
//   return Object.keys(balanceCheck).reduce((aggr, key) => {
//     const currentVal = isNaN(balanceCheck[key]) ? 0 : balanceCheck[key];
//     return aggr + currentVal;
//   }, 0);
// };

const calcDebitBalance = () => {
  return Object.keys(currentDebits).reduce((aggr, key) => {
    const currentVal = isNaN(currentDebits[key]) ? 0 : currentDebits[key];
    return aggr + currentVal;
  }, 0);
};

const calcCreditBalance = () => {
  return Object.keys(currentCredits).reduce((aggr, key) => {
    const currentVal = isNaN(currentCredits[key]) ? 0 : currentCredits[key];
    return aggr + currentVal;
  }, 0);
};

const updateDebitBalance = event => {
  const currentKey = event.target.name;
  const currentVal = parseFloat(parseFloat(event.target.value).toFixed(2));
  currentDebits[currentKey] = currentVal;
  return calcDebitBalance();
};

const updateCreditBalance = event => {
  const currentKey = event.target.name;
  const currentVal = -parseFloat(parseFloat(event.target.value).toFixed(2));
  currentCredits[currentKey] = currentVal;
  return calcCreditBalance();
};

const removeAmount = event => {
  const keyToDelete =
    event.target.parentNode.parentNode.parentNode.children[0].children[1]
      .children[0].name;
  delete currentDebits[keyToDelete];
  delete currentCredits[keyToDelete];
};

const newTransactionSubmitted = (event, userId, fetchUserData) => {
  event.preventDefault();
  const date = event.target.children[0].children[1].children[0].value;
  const descriptionIndex = event.target.children.length - 2;
  const description = event.target.children[descriptionIndex].children[1].value;
  for (let i = 2; i < descriptionIndex; i++) {
    const fieldCheck = event.target.children[i].innerText[0];
    if (fieldCheck !== "W" && fieldCheck !== "S" && fieldCheck !== "I") {
      // debugger
      const amount =
        event.target.children[i].children[0].children[1].children[0].value;
      const account =
        event.target.children[i].children[1].children[1].innerText;
      transactions.push([amount, account]);
      // api.transaction
    }
  }

  // console.log(transactions)
  createEntry(date, description, userId, fetchUserData);
  // console.log('date: ', date)
  // console.log('description: ', description)
  // console.log(currentDebits)
  // delete currentDebits
  // delete currentCredits
  // console.log(currentCredits);
  event.target.reset();
  resetTransactions();
  // resetTransactions(currentDebits)
  // resetTransactions(currentCredits)
  // transactions.length = 0
};

const resetTransactions = () => {
  for (const key in currentDebits) {
    delete currentDebits[key];
  }
  for (const key in currentCredits) {
    delete currentCredits[key];
  }
};

const createEntry = (date, description, userId, fetchUserData) => {
  api.entries.createEntry(date, description, userId).then(json => {
    if (json.error) {
      console.log("ERROR");
    } else {
      // console.log(json)
      // getEntryIds(json.id)
      // createTransactions(json.id)
      getAccountNumbers(json.id, userId, fetchUserData);
    }
  });
};

const getAccountNumbers = (entryId, userId, fetchUserData) => {
  // console.log(transactions)
  // debugger
  transactions.forEach((transaction, index) => {
    const amount = transaction[0];
    const accountName = transaction[1];
    // debugger
    // console.log('amt: ', amount)
    // console.log('acct ', accountName)
    api.accounts.getAccountId(accountName, userId).then(account => {
      api.transactions
        .createTransaction(amount, account.id, entryId)
        .then(json => fetchUserData(userId));

      // createTransaction(transaction[0], entryId, account.id)
    });
  });
  transactions.length = 0;
};

// const getEntryIds = (entryId) => {
//
// }

// const createTransaction = (amount, entryId, accountId) => {
// for (let transaction of transactions) {
//   const amount = parseFloat(transaction[0])
//   const account = transaction[1]
//   console.log(transaction)
// }

export {
  newTransactionSubmitted,
  updateDebitBalance,
  updateCreditBalance,
  removeAmount,
  // removeCreditBalance,
  calcDebitBalance,
  calcCreditBalance,
  resetTransactions
};
