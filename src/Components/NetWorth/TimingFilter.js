import React from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';


const TimingFilter = (props) => {



  return(
    <Form>
      <Form.Group widths='equal'>
        <Form.Input
          type='hidden'
          width={6}
        />
        <label>As of...</label>
        <Form.Input
          fluid
          // onChange={}
          value={props.asOfDate}
          type='date'
          width={4}
        />
        <Form.Input
          type='hidden'
          width={6}
        />
      </Form.Group>
    </Form>
  )


};

const mapStateToProps = (state) => {
  return {
    // showLiquid
    // accounts: state.userInfo.accounts,
    // entries: state.userInfo.entries
    asOfDate: state.netWorthContainer.asOfDate
  };
};

const mapDispatchToProps = (dispatch) => {
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimingFilter)
