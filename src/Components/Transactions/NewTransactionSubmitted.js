

const currentDebits = {}
const currentCredits = {}

const calcDebitBalance = () => {
  return Object.keys(currentDebits).reduce((aggr, key) => {
    return aggr + currentDebits[key]
  }, 0)
}

const calcCreditBalance = () => {
  return Object.keys(currentCredits).reduce((aggr, key) => {
    return aggr + currentCredits[key]
  }, 0)
}

const updateDebitBalance = (event) => {
  const currentKey = event.target.name
  const currentVal = parseFloat(parseFloat(event.target.value).toFixed(2))
  currentDebits[currentKey] = currentVal
  // return calcDebitBalance())
}

const updateCreditBalance = (event) => {
  const currentKey = event.target.name
  const currentVal = parseFloat(parseFloat(event.target.value).toFixed(2))
  currentCredits[currentKey] = currentVal
  // console.log(currentCredits)
  // return calcCreditBalance()


}

const newTransactionSubmitted = (event) => {
  event.preventDefault()
  const YYYYMMDD = event.target.children[0].children[1].children[0].value
  const descriptionIndex = event.target.children.length - 2
  for (let i = 2; i < descriptionIndex; i++) {
    // debugger
    if (event.target.children[i].innerText[0] !== "W" || "S") {

      console.log(event.target.children[i].children[0].children[1].children[0].value)
      console.log(event.target.children[i].children[1].children[1].innerText)
    }
  }
  const description = event.target.children[descriptionIndex].children[1].value
  console.log('date: ', YYYYMMDD)
  console.log('description: ', description)
  // debugger
}

export {
  newTransactionSubmitted,
  updateDebitBalance,
  updateCreditBalance,
  calcDebitBalance,
  calcCreditBalance
}
