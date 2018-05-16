import React from "react";
import Assets from "./Assets";
import Liabilities from "./Liabilities";
import TimingFilter from "./TimingFilter";
import { Segment, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import formatNumber from "../../HelperFunctions/formatNumber";
import financialStatementHelpers from "../../HelperFunctions/financialStatementHelpers";

const subcategories = [1, 2, 3, 4, 5, 6];

const NetWorth = props => {
  return (
    <div>
      <TimingFilter />
      <Header size="huge" textAlign="center">
        Net Worth:
        {formatNumber.withoutCents(
          financialStatementHelpers.amountOfEntriesGivenSubcategories(
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

export default connect(mapStateToProps, null)(NetWorth);
