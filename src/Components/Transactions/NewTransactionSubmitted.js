

const newTransactionSubmitted = (event) => {
  event.preventDefault()
  const YYYYMMDD = event.target.children[0].children[1].children[0].value

  const descriptionIndex = event.target.children.length - 2
  for (let i = 2; i < descriptionIndex; i++) {
    console.log(event.target.children[i].children[0].children[1].children[0].value)
  }
  const description = event.target.children[descriptionIndex].children[1].value
  console.log(YYYYMMDD)
  console.log(description)
  debugger
}

export default newTransactionSubmitted
