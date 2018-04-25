import React from 'react'
import Assets from './Assets'
import Liabilities from './Liabilities'
import Equity from './Equity'


const NetWorth = (props) => {

  return(
    <div>
      <Equity />
      <Assets />
      <Liabilities />
    </div>

  )
}

export default NetWorth
