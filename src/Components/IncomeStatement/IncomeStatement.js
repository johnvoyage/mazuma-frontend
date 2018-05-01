import React from "react";
import Spending from "./Spending";
import Earning from "./Earning";
import TimingFilter from "./TimingFilter";
import { Segment, Header } from "semantic-ui-react";
import { totalForSubcategory } from "../MainSegment/TransactionFunctions";
import { connect } from "react-redux";

const IncomeStatement = props => {
  return (
    <div>
      <TimingFilter />
      <Header size="huge" textAlign="center">
        Net Income: ${" "}
        {totalForSubcategory(props.entries, props.accounts, [8, 9])}
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
    // showLiquid
    accounts: state.userInfo.accounts,
    entries: state.userInfo.entries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // termsAgreementInit: () => {
    //   dispatch({ type: 'TERMS_AGREEMENT_INIT' })
    //   // },
    //   toggleTermsAgreement: () => {
    //     dispatch({ type: 'TOGGLE_TERMS_AGREEMENT' })
    //   },
    //   signUserUp: (userInfo) => {
    //     console.log(userInfo)
    //     dispatch({ type: 'SIGN_USER_UP', userInfo })
    //   }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IncomeStatement);
