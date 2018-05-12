import React from "react";
import Spending from "./Spending";
import Earning from "./Earning";
import TimingFilter from "./TimingFilter";
import { Segment, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import formatNumber from "../../HelperFunctions/formatNumber";
import financialStatementHelpers from "../../HelperFunctions/financialStatementHelpers";

const subcategories = [8, 9];

const IncomeStatement = props => {
  return (
    <div>
      <TimingFilter />
      <Header size="huge" textAlign="center">
        Net Income:
        {formatNumber.withoutCents(
          -financialStatementHelpers.amountOfEntriesGivenSubcategories(
            subcategories,
            props.accounts,
            props.entries,
            props.beginDate,
            props.endDate
          ),
          " $ "
        )}
      </Header>
      <Segment>
        <Earning />
        <Spending />
      </Segment>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    accounts: state.userInfo.accounts,
    entries: state.userInfo.entries,
    beginDate: state.netIncomeContainer.beginDate,
    endDate: state.netIncomeContainer.endDate
  };
};

export default connect(mapStateToProps, null)(IncomeStatement);
