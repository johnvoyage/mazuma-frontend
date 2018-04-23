import React from 'react'
import { Button, Checkbox, Icon, Table } from 'semantic-ui-react'
import { connect } from 'react-redux';


class Transactions extends React.Component {

  render() {
    return(
      <Table celled compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='center'>Transaction</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Account</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Amount</Table.HeaderCell>
            <Table.HeaderCell />
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell rowSpan={2}>
              Transaction: 1
              <br/>
              Date: 1/15/16
            </Table.Cell>
            <Table.Cell>1001</Table.Cell>
            <Table.Cell>750</Table.Cell>
            <Table.Cell rowSpan={2} selectable textAlign='center'>
              <Icon name='pencil' />
            </Table.Cell>
            <Table.Cell rowSpan={2} selectable textAlign='center'>
              <Icon name='remove' />
            </Table.Cell>
          </Table.Row>


          <Table.Row>
            <Table.Cell>1007</Table.Cell>
            <Table.Cell>750</Table.Cell>
          </Table.Row>

          <Table.Row>

            <Table.Cell colSpan={5}>
              The description of this transaction hereeee
            </Table.Cell>

          </Table.Row>

          <Table.Row>
            <Table.Cell>
              Transaction:2
              <br/>
              Date: 1/16/16
            </Table.Cell>
            <Table.Cell>1006</Table.Cell>
            <Table.Cell>1,500</Table.Cell>
            <Table.Cell selectable textAlign='center'>
              <Icon name='pencil' />
            </Table.Cell>
            <Table.Cell selectable textAlign='center'>
              <Icon name='remove' />
            </Table.Cell>

          </Table.Row>
          <Table.Row>

            <Table.Cell colSpan={5}>
              The description of this transaction hereeee
            </Table.Cell>

          </Table.Row>

        </Table.Body>

      </Table>
    )
  }
}

// export default UserAccountPaccount

const mapStateToProps = (state) => {
  return {
    email: state.userInfo.email,
    ticker: state.userInfo.tickerSymbol
    // agreedToTerms: state.formValidity.signUpForm
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
    // termsAgreementInit: () => {
    //   dispatch({ type: 'TERMS_AGREEMENT_INIT' })
    // },
    // toggleTermsAgreement: () => {
    //   dispatch({ type: 'TOGGLE_TERMS_AGREEMENT' })
    // },
    // signUserUp: (userInfo) => {
    //   console.log(userInfo)
    //   dispatch({ type: 'SIGN_USER_UP', userInfo })
    // }
//   }
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(Transactions)
