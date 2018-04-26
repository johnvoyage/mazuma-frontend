import React from 'react'
import {Input, Select, Form, TextArea, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { newTransactionSubmitted, updateDebitBalance, updateCreditBalance, removeAmount, calcDebitBalance, calcCreditBalance } from './NewTransactionSubmitted'
import './csstransaction.css';
// import TransactionBalanceCheck from './TransactionBalanceCheck'


const NewTransactionForm = (props) => {

  const renderFields = (numOfFields, formType) => {
    let fieldName
    formType === 'formCreditFields' ? (fieldName = 'cr') : (fieldName ='db')
    let formFields = []
    for (let i = 0; i < numOfFields; i++) {
      formFields.push(
        <Form.Group inline key={i}>
          <Form.Field
            name={`${fieldName}${i+1}`}
            type='number'
            required={i === 0}
            label='Amount'
            onChange={
              (event) => {
                fieldName === 'db' ? updateDebitBalance(event) : updateCreditBalance(event)
                props.updateTransactionBalance(calcCreditBalance() - calcDebitBalance())
              }
            }
            control={Input}
            placeholder='Amount'
          />
          <Form.Field
            label='Account'
            required={i === 0}

            control={Select}
            options={options}
            placeholder='Account'
            // onChange={handleChange}
          />
          { i === numOfFields - 1 ?
            (<div>
              <Button
                id={`${fieldName}${i+1}`}

                disabled={numOfFields === 1}
                onClick={
                  (event) => {
                    removeAmount(event)
                    props.changeFormFields(formType, -1)}
                  }
                icon='minus circle'
              />
              <Button onClick={() => props.changeFormFields(formType, 1)}
              icon='add circle'
              />
            </div>)
          : null }
        </Form.Group>
      )
    }
    return formFields
  }

  const options = [
    { key: 'm', text: 'Cash', value: 'male' },
    { key: 'f', text: 'Car', value: 'female' },
    { key: 'a', text: 'Add new...', value: '--addnewperuser--' },

  ]

  // const handleSubmit = (event) => {
  //   'SUBMITTED'
  // }

  // const handleChange = (event) => {
    // formInput = {
    //   ...formInput,
    //   [event.target.name]: event.target.value
    // }
    // event.target.innerText === 'Add new...' ? props.addNewAccountOn() : null
    // console.log('name: ', event.target.name)
    // console.log('innerT: ', event.target.innerText)
  // }

  return(
    <Form onSubmit={newTransactionSubmitted}>
      <Form.Field
        required
        name='date'
        type='date'
        control={Input}
        label='Date'
        // onChange={handleChange}
      />
      <h3 id='transdebits'>What you received...</h3>
        { renderFields(props.formDebitFields, 'formDebitFields') }
      <h3>Subtotal: {calcDebitBalance()}</h3>
      <h3 id='transcredits'>What you gave (enter as a positive number)...</h3>
        { renderFields(props.formCreditFields, 'formCreditFields') }
      <h3>Subtotal: {calcCreditBalance()}</h3>
      {
        props.transactionBalance !== 0 ?
        <h4 id='out-of-bal'>Currently out of balance by: {Math.abs(props.transactionBalance)} </h4> :
        null
      }

      <Form.Field
        name='description'
        control={TextArea}
        label='Description'
        // onChange={handleChange}

        placeholder='Made a grocery trip to Rite Aid, split 50/25/25 between household supplies, food, and medicine'
      />
      <Form.Field disabled={props.transactionBalance !== 0} control={Button}>Submit</Form.Field>
    </Form>
  )

}

const mapStateToProps = (state) => {
  return {
    formDebitFields: state.transactionContainer.formDebitFields,
    formCreditFields: state.transactionContainer.formCreditFields,
    transactionBalance: state.transactionContainer.transactionBalance,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFormFields: (whichForm, amount) => {
      dispatch({ type: 'CHANGE_TRANSACTION_FORM_FIELDS', whichForm, amount })
    },
    updateTransactionBalance: (transactionBalance) => {
      // debugger
      console.log(transactionBalance)
      dispatch({ type: 'UPDATE_TRANSACTION_BALANCE', transactionBalance })
    },
    // changeFormInput: () => {
    //   dispatch({ type: 'CHANGE_TRANSACTION_FORM_INPUT' })
    // }
    // addNewAccountOn: () => {
    //   dispatch({ type: 'ADD_NEW_ACCOUNT_ON' })
    // },
  };
};


export default
connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTransactionForm)
