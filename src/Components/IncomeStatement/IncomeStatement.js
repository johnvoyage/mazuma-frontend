import React from 'react'
import Spending from './Spending'
import Earning from './Earning'
import TimingFilter from './TimingFilter'





const IncomeStatement = (props) => {

  return(
    <div>
      <TimingFilter />

      <Earning />
      <Spending />
    </div>

  )
}

export default IncomeStatement
