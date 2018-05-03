import React from "react";
import { Statistic, Icon, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

const UserHomeStats = props => {
  // console.log(props)
  // const numOfTransactions = () => {
  //   // debugger
  //   if (!!props.numOfEntries && !!props.numOfEntries[0].transactions) {
  //     return props.numOfEntries.reduce((aggr, entry) => {
  //       // debugger
  //       // console.log(entry)
  //       return aggr += entry.transactions.length
  //     }, 0)
  //   } else  {
  //     return 'Loading...'
  //   }
  // }

  return (
    <Segment>
      <Statistic.Group widths="three">
        <Statistic>
          <Statistic.Value text>500</Statistic.Value>
          <Statistic.Label>TRANSACTIONS</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>
            <Icon name="dollar" />
            5555
          </Statistic.Value>
          <Statistic.Label>NET WORTH</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>4/12/45</Statistic.Value>
          <Statistic.Label>Member Since</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </Segment>
  );
};

const mapStateToProps = state => {
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
)(UserHomeStats);
