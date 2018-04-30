import React from 'react'
import { connect } from 'react-redux'

import { Grid, Segment } from 'semantic-ui-react'


const Earning = (props) => {
  return(
    <Grid columns='equal'>
      <Grid.Row>
        <Grid.Column textAlign='center'>
          Net Income: {5}
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign='center'>
          <Segment>Earning</Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          Liquid Earning
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          Tangible Earning
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          Intangible Earning
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          Long-term assets
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
)(Earning)
