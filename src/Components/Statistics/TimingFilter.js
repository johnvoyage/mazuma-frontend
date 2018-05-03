import React from "react";
import { Form, Input, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { todayInEnglish } from "../../StaticOptions/currentDate";

const TimingFilter = props => {
  const handleChange = event => {
    // debugger;
    props.updateAsOfDate(
      "netIncomeContainer",
      event.target.name,
      event.target.value
    );
  };

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Field width={4} inline>
          <Input type="hidden" />
        </Form.Field>
        <Form.Field width={4} inline>
          <label>Between...</label>
          <Input
            onChange={handleChange}
            name="beginDate"
            value={props.beginDate}
            type="date"
          />
        </Form.Field>
        <Form.Field width={4} inline>
          <label>and...</label>
          <Input
            onChange={handleChange}
            name="endDate"
            value={props.endDate}
            type="date"
          />
        </Form.Field>
        <Form.Field width={4} inline>
          <Input type="hidden" />
        </Form.Field>
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
    endDate: state.netIncomeContainer.endDate,
    beginDate: state.netIncomeContainer.beginDate
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
