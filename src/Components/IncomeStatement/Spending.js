import React from 'react'
import { connect } from 'react-redux'

import { Grid, Segment } from 'semantic-ui-react'


const Spending = (props) => {
  return(
    <Grid columns='equal'>
      <Grid.Row>
        <Grid.Column textAlign='center'>
          <Segment>Spending</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    // showLiquid

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // termsAgreementInit: () => {
    //   dispatch({ type: 'TERMS_AGREEMENT_INIT' })
    // },
    toggleTermsAgreement: () => {
      dispatch({ type: 'TOGGLE_TERMS_AGREEMENT' })
    },
    signUserUp: (userInfo) => {
      console.log(userInfo)
      dispatch({ type: 'SIGN_USER_UP', userInfo })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spending)
