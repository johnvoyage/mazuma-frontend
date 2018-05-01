import React from "react";
import { Form, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { todayInEnglish } from "../../StaticOptions/currentDate";

const TimingFilter = props => {
  const handleChange = event => {
    props.updateAsOfDate("netWorthContainer", "asOfDate", event.target.value);
  };

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input type="hidden" width={6} />
        <label>As of...</label>
        <Form.Input
          fluid
          onChange={handleChange}
          value={props.asOfDate}
          type="date"
          width={4}
        />
        <Form.Input type="hidden" width={6} />
      </Form.Group>
      <Header as="h5" textAlign="center">
        Note: hit 'x' to reset to today: ({todayInEnglish})
      </Header>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    // showLiquid
    // accounts: state.userInfo.accounts,
    // entries: state.userInfo.entries
    asOfDate: state.netWorthContainer.asOfDate
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateAsOfDate: (container, whichDate, newDate) => {
      dispatch({ type: "UPDATE_DATE", container, whichDate, newDate });
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(TimingFilter);
