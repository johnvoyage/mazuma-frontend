// // import React from 'react'
// import { connect } from 'react-redux';
// import { calcDebitBalance, calcCreditBalance } from './NewTransactionSubmitted'
//
//
// const TransactionBalanceCheck = (props) => {
//   props.updateTransactionBalance(calcCreditBalance - calcDebitBalance)
// }
//
// const mapStateToProps = (state) => {
//   return {
//     transactionBalance: state.transactionContainer.transactionBalance
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     updateTransactionBalance: (transactionBalance) => {
//       dispatch({ type: 'UPDATE_TRANSACTION_BALANCE', transactionBalance })
//     }
//   }
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TransactionBalanceCheck)

// const mapStateToProps = (state) => {
//   return {
//     descriptionToggle: state.transactionContainer.descriptionToggle,
//     newTransaction: state.transactionContainer.newTransaction,
//     newAccount: state.transactionContainer.newAccount,
//     filterSelected: state.transactionContainer.filterSelected,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     toggleTransactionDescription: () => {
//       dispatch({ type: 'TOGGLE_TRANSACTION_DESCRIPTION' })
//     },
//     toggleTransactionFilter: (event) => {
//       dispatch({ type: 'TOGGLE_TRANSACTION_FILTER', filterSelected: event.target.name })
//     },
//     toggleNewTransaction: () => {
//       dispatch({ type: 'TOGGLE_NEW_TRANSACTION' })
//     },
//     toggleNewAccount: () => {
//       dispatch({ type: 'TOGGLE_NEW_ACCOUNT' })
//     }
//   };
// };
