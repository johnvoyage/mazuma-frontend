import React from "react";
import Assets from "./Assets";
import Liabilities from "./Liabilities";
import TimingFilter from "./TimingFilter";
import { Segment, Header } from "semantic-ui-react";
// import { totalForSubcategory } from "../MainSegment/TransactionFunctions";
import { connect } from "react-redux";
import formatNumber from "../../HelperFunctions/formatNumber";
import financialStatementHelpers from "../../HelperFunctions/financialStatementHelpers";

const subcategories = [1, 2, 3, 4, 5, 6];

const NetWorth = props => {
  const amountOfEntriesGivenSubcategories = arrayOfSubcategoryIds => {
    const accountIdsOfSubcategoriesArray = financialStatementHelpers.filterAccountIdsOfSubcategories(
      arrayOfSubcategoryIds,
      props.accounts
    );
    return formatNumber.withoutCents(
      financialStatementHelpers
        .mapTransactionsOfEntries(
          financialStatementHelpers.filterEntriesWithinDateRange(
            props.entries,
            props.beginDate,
            props.endDate
          )
        )
        .reduce((aggr, arrayOfTransactions) => {
          arrayOfTransactions.forEach(transaction => {
            return accountIdsOfSubcategoriesArray.indexOf(
              transaction.account_id
            ) > -1
              ? (aggr += parseFloat(transaction.amount))
              : null;
          });
          return aggr;
        }, 0),
      " $ "
    );
  };

  return (
    <div>
      <TimingFilter />
      <Header size="huge" textAlign="center">
        Net Worth:
        {amountOfEntriesGivenSubcategories(subcategories)}
      </Header>
      <Segment>
        <Assets />
        <Liabilities />
      </Segment>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    accounts: state.userInfo.accounts,
    entries: state.userInfo.entries,
    beginDate: 0,
    endDate: state.netWorthContainer.asOfDate
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, null)(NetWorth);
