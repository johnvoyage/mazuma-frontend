import React from 'react'
import Assets from './Assets'
import Liabilities from './Liabilities'
import Equity from './Equity'
import TimingFilter from './TimingFilter'
import { Segment } from 'semantic-ui-react';




const NetWorth = (props) => {

  return(
    <div>
      <TimingFilter />
      <Segment>
        <Equity />
        <Assets />
        <Liabilities />
      </Segment>
    </div>

  )
}

export default NetWorth
