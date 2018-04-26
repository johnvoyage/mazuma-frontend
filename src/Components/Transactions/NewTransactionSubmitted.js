const currentDebits = {}
const currentCredits = {}

const calcDebitBalance = () => {
  return Object.keys(currentDebits).reduce((aggr, key) => {
    const currentVal = isNaN(currentDebits[key]) ? 0 : currentDebits[key]
    return aggr + currentVal
  }, 0)
}

const calcCreditBalance = () => {
  return Object.keys(currentCredits).reduce((aggr, key) => {
    const currentVal = isNaN(currentCredits[key]) ? 0 : currentCredits[key]
    return aggr + currentVal
  }, 0)
}

const updateDebitBalance = (event) => {
  const currentKey = event.target.name
  const currentVal = parseFloat(parseFloat(event.target.value).toFixed(2))
  currentDebits[currentKey] = currentVal
  console.log('debits: ', currentDebits)
  return calcDebitBalance()
}

const updateCreditBalance = (event) => {
  const currentKey = event.target.name
  const currentVal = parseFloat(parseFloat(event.target.value).toFixed(2))
  currentCredits[currentKey] = currentVal
  return calcCreditBalance()
}

const removeAmount = (event) => {
  const keyToDelete = event.target.parentNode.parentNode.parentNode.children[0].children[1].children[0].name
  delete currentDebits[keyToDelete]
  delete currentCredits[keyToDelete]
}


const newTransactionSubmitted = (event) => {
  event.preventDefault()
  const YYYYMMDD = event.target.children[0].children[1].children[0].value
  const descriptionIndex = event.target.children.length - 2
  for (let i = 2; i < descriptionIndex; i++) {
    const fieldCheck = event.target.children[i].innerText[0]
    if (fieldCheck !== "W" && fieldCheck !== "S") {
      // debugger
      console.log(event.target.children[i].children[0].children[1].children[0].value)
      console.log(event.target.children[i].children[1].children[1].innerText)
      // debugger
    }
  }
  const description = event.target.children[descriptionIndex].children[1].value
  console.log('date: ', YYYYMMDD)
  console.log('description: ', description)
  console.log(currentDebits)
  console.log(currentCredits);
}

export {
  newTransactionSubmitted,
  updateDebitBalance,
  updateCreditBalance,
  removeAmount,
  // removeCreditBalance,
  calcDebitBalance,
  calcCreditBalance,
}
