import React from 'react'
import {Input, Select, Form, TextArea, Button, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';


const NewTransactionForm = (props) => {

  const renderFields = (numOfFields, formType) => {
    let formFields = []
    for (let i = 0; i < numOfFields; i++) {
      formFields.push(
        <Form.Group key={i}>
          <Form.Field type='number' control={Input} placeholder='Amount' />
          <Form.Field control={Select} options={options} placeholder='Account' />
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

  const renderCreditFields = () => {
    let creditFields = []
    for (let i = 0; i < props.formCreditFields; i++) {
      creditFields.push(
        <Form.Group key={i}>
          <Form.Field type='number' control={Input} placeholder='Amount' />
          <Form.Field control={Select} options={options} placeholder='Account' />
          { i === props.formCreditFields - 1 ?
            (<div>
              <Button disabled={props.formCreditFields === 1} onClick={() => props.changeFormFields('formCreditFields', -1)} icon='minus circle' />
              <Button onClick={() => props.changeFormFields('formCreditFields', 1)} icon='add circle' />
            </div>)
          : null }
        </Form.Group>
      )
    }
    return creditFields
  }

  const options = [
    { key: 'm', text: 'Cash', value: 'male' },
    { key: 'f', text: 'Car', value: 'female' },
  ]

  return(
    <Form>

      <Segment>What you got...</Segment>
        { renderFields(props.formDebitFields, 'formDebitFields') }
      <Segment>What you gave (enter as a positive number)...</Segment>
        // { renderCreditFields() }
        { renderFields(props.formCreditFields, 'formCreditFields') }






      <Form.Field
        control={TextArea}
        label='Description'
        placeholder='Made a grocery trip to Rite Aid, split 50/25/25 between household supplies, food, and medicine'
      />
      <Form.Field control={Button}>Submit</Form.Field>

    </Form>
  )
  // }
}

const mapStateToProps = (state) => {
  return {
    formDebitFields: state.transactionContainer.formDebitFields,
    formCreditFields: state.transactionContainer.formCreditFields,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // toggleTransactionDescription: () => {
    //   dispatch({ type: 'TOGGLE_TRANSACTION_DESCRIPTION' })
    // },
    // toggleTransactionFilter: (event) => {
    //   dispatch({ type: 'TOGGLE_TRANSACTION_FILTER', filterSelected: event.target.name })
    // },
    // toggleNewTransaction: () => {
    //   dispatch({ type: 'TOGGLE_NEW_TRANSACTION' })
    // }
    changeFormFields: (whichForm, amount) => {
      dispatch({ type: 'CHANGE_TRANSACTION_FORM_FIELDS', whichForm, amount })
    }
  };
};


export default
connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTransactionForm)
