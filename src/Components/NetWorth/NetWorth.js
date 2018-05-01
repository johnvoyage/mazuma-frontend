import React from "react";
import Assets from "./Assets";
import Liabilities from "./Liabilities";
import TimingFilter from "./TimingFilter";
import { Segment, Header } from "semantic-ui-react";
import { totalForSubcategory } from "../MainSegment/TransactionFunctions";
import { connect } from "react-redux";

const NetWorth = props => {
  return (
    <div>
      <TimingFilter />
      <Header size="huge" textAlign="center">
        Net Worth: ${" "}
        {totalForSubcategory(props.entries, props.accounts, [1, 2, 3, 4, 5, 6])}
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

export default connect(mapStateToProps, mapDispatchToProps)(NetWorth);
