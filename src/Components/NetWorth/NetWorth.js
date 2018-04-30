import React from 'react'
import Assets from './Assets'
import Liabilities from './Liabilities'
import Equity from './Equity'
import TimingFilter from './TimingFilter'



const NetWorth = (props) => {

  return(
    <div>
      <TimingFilter />
      <Equity />
      <Assets />
      <Liabilities />
    </div>

  )
}

export default NetWorth
