import React from 'react'
import Spending from './Spending'
import Earning from './Earning'




const IncomeStatement = (props) => {

  return(
    <div>
      <Earning />
      <Spending />
    </div>

  )
}

export default IncomeStatement
