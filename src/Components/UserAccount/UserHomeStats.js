import React from "react";
import { Statistic, Icon, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import formatNumber from "../../HelperFunctions/formatNumber";
import financialStatementHelpers from "../../HelperFunctions/financialStatementHelpers";
import dateHelpers from "../../HelperFunctions/dateHelpers";

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
  const numberOfTransactions = () => {
    return props.entries.reduce(
      (aggr, entry) => aggr + entry.transactions.length,
      0
    );
  };

  return (
    <Segment>
      <Statistic.Group widths="three">
        <Statistic>
          <Statistic.Value text>{numberOfTransactions()}</Statistic.Value>
          <Statistic.Label>TRANSACTIONS</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>
            <Icon name="dollar" />
            {formatNumber.withoutCents(
              financialStatementHelpers.amountOfEntriesGivenSubcategories(
                [1, 2, 3, 4, 5, 6],
                props.accounts,
                props.entries,
                0,
                dateHelpers.dateHelpersJavaScript(new Date())
              )
            )}
          </Statistic.Value>
          <Statistic.Label>NET WORTH</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>01/01/18</Statistic.Value>
          <Statistic.Label>Member Since</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </Segment>
  );
};

const mapStateToProps = state => {
  return {
    // numOfTransactions:
    // dateCreated: state.userInfo.dateCreated.slice(0, 10),
    entries: state.userInfo.entries,
    accounts: state.userInfo.accounts
  };
};

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(UserHomeStats);
