import React from 'react'
import { connect } from 'react-redux'

import { Grid, Segment } from 'semantic-ui-react'


const Earning = (props) => {

  console.log(props)
  // debugger

  const totalNetIncome = (entries) => {
    return entries.reduce((aggr, entry) => {
      return netIncomeOfTransaction(entry.transactions)
    }, 0)
  }

  const netIncomeOfTransaction = (arrayOfTransactions) => {
    return arrayOfTransactions.reduce((aggr, transaction) => {
      if (trueIfIncomeAccount(transaction.account_id)) {
        return aggr + parseFloat(transaction.amount)
      } else {
        return aggr
      }
    }, 0)
  }

  const trueIfIncomeAccount = (accountId) => {
    // props.accounts.forEach
    for (const account of props.accounts) {
      if (account.id === accountId && account.subcategory_id >= 8) {
        return true
      }
    }
    return false
  }
  // debugger

  // const netIncome = () => {
  //   props.entries.reduce((aggr, entry) => {
  //
  //   })
  // }

  return(
    <Grid columns='equal'>
      <Grid.Row>
        <Grid.Column textAlign='center'>
          Net Income: { totalNetIncome(props.entries) }
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
    accounts: state.userInfo.accounts,
    entries: state.userInfo.entries
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
)(Earning)
