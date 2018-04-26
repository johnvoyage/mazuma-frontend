import React from 'react'
import {Input, Select, Form, TextArea, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { newTransactionSubmitted, updateDebitBalance, updateCreditBalance, removeAmount, calcDebitBalance, calcCreditBalance } from './NewTransactionSubmitted'
import './csstransaction.css';


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
            step='0.01'
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
          />
          { i === numOfFields - 1 ?
            (<div>
              <Button
                id={`${fieldName}${i+1}`}

                disabled={numOfFields === 1}
                onClick={
                  (event) => {
                    removeAmount(event)
                    props.updateTransactionBalance(calcCreditBalance() - calcDebitBalance())

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
      <h3>Subtotal: &emsp; $ {calcDebitBalance().toFixed(2)}</h3>
      <h3 id='transcredits'>What you gave (enter as a positive number)...</h3>
        { renderFields(props.formCreditFields, 'formCreditFields') }
      <h3>Subtotal: &emsp; $ {calcCreditBalance().toFixed(2)}</h3>
      {
        props.transactionBalance !== 0 ?
        <h4 id='out-of-bal'>Currently out of balance by: &emsp; $ {Math.abs(props.transactionBalance).toFixed(2)} </h4> :
        null
      }

      <Form.Field
        name='description'
        control={TextArea}
        label='Description'
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
