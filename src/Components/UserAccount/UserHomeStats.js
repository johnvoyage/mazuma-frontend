import React from 'react'
import { Statistic, Image, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';


const UserHomeStats = (props) => {
  // console.log(props)
  const numOfTransactions = () => {
    // debugger
    if (!!props.numOfEntries && !!props.numOfEntries[0].transactions) {
      return props.numOfEntries.reduce((aggr, entry) => {
        // debugger
        // console.log(entry)
        return aggr += entry.transactions.length
      }, 0)
    } else  {
      return 'Loading...'
    }
  }

  return (
    <Statistic.Group widths='four'>
    <Statistic>
    <Statistic.Value>5</Statistic.Value>
    <Statistic.Label>Transactions</Statistic.Label>
    </Statistic>

    <Statistic>
    <Statistic.Value text>
    Three
    <br />Thousand
    </Statistic.Value>
    <Statistic.Label>Signups</Statistic.Label>
    </Statistic>

    <Statistic>
    <Statistic.Value>
    <Icon name='money' />
      $5555
    </Statistic.Value>
    <Statistic.Label>Net Worth</Statistic.Label>
    </Statistic>

    <Statistic>
    <Statistic.Value>
    <Image src='/assets/images/avatar/small/joe.jpg' className='circular inline' />
    42
    </Statistic.Value>
    <Statistic.Label>Team Members</Statistic.Label>
    </Statistic>
    </Statistic.Group>
  )
}


const mapStateToProps = (state) => {
  return {
    // numOfTransactions:
    numOfEntries: state.userInfo.entries,
    numOfAccounts: state.userInfo.accounts

  };
};

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(UserHomeStats)
