import React from 'react'
import {Input, Select, Form, TextArea, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { newTransactionSubmitted, updateDebitBalance, updateCreditBalance } from './NewTransactionSubmitted'
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
            name={`${fieldName}:amt:${i+1}`}
            type='number'
            // value={}
            label='Amount'
            onChange={ fieldName === 'db' ? updateDebitBalance : updateCreditBalance }
            control={Input}
            placeholder='Amount'
          />
          <Form.Field
            label='Account'
            control={Select}
            options={options}
            placeholder='Account'
            // onChange={handleChange}
          />
          { i === numOfFields - 1 ?
            (<div>
              <Button disabled={numOfFields === 1} onClick={() => props.changeFormFields(formType, -1)} icon='minus circle' />
              <Button onClick={() => props.changeFormFields(formType, 1)} icon='add circle' />
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
      <h3 id='transcredits'>What you gave (enter as a positive number)...</h3>
        { renderFields(props.formCreditFields, 'formCreditFields') }
      <Form.Field
        name='description'
        control={TextArea}
        label='Description'
        // onChange={handleChange}

        placeholder='Made a grocery trip to Rite Aid, split 50/25/25 between household supplies, food, and medicine'
      />
      <Form.Field control={Button}>Submit</Form.Field>
    </Form>
  )

}

const mapStateToProps = (state) => {
  return {
    formDebitFields: state.transactionContainer.formDebitFields,
    formCreditFields: state.transactionContainer.formCreditFields,
    // formInput: state.formInput.newTransaction,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFormFields: (whichForm, amount) => {
      dispatch({ type: 'CHANGE_TRANSACTION_FORM_FIELDS', whichForm, amount })
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
