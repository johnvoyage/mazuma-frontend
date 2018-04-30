import React from 'react'
import Spending from './Spending'
import Earning from './Earning'
import TimingFilter from './TimingFilter'
import { Segment } from 'semantic-ui-react';





const IncomeStatement = (props) => {

  return(
    <div>
      <TimingFilter />
      <Segment>
        <Earning />
        <Spending />
      </Segment>
    </div>

  )
}

export default IncomeStatement
