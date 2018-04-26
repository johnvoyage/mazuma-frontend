const debitBalance = 0
const creditBalance = 0

const currentDebits = {}
const currentCredits = {}

const updateDebitBalance = (event) => {
  debugger
}

const updateCreditBalance = (event) => {
  console.log('inside cr')
}

const newTransactionSubmitted = (event) => {
  event.preventDefault()
  const YYYYMMDD = event.target.children[0].children[1].children[0].value
  const descriptionIndex = event.target.children.length - 2
  for (let i = 2; i < descriptionIndex; i++) {
    // debugger
    if (event.target.children[i].innerText[0] !== "W") {

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
  updateCreditBalance
}
