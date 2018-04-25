import React from 'react'
import {Input, Select, Form, TextArea, Button, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';


const NewTransactionForm = (props) => {

  // let formInput = {};

  const renderFields = (numOfFields, formType) => {
    let formFields = []
    for (let i = 0; i < numOfFields; i++) {
      formFields.push(
        <Form.Group key={`${formType}${i}`}>
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

  const options = [
    { key: 'm', text: 'Cash', value: 'male' },
    { key: 'f', text: 'Car', value: 'female' },
  ]

  const handleSubmit = () => {
    debugger
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Segment>What you got...</Segment>
        { renderFields(props.formDebitFields, 'formDebitFields') }
      <Segment>What you gave (enter as a positive number)...</Segment>
        { renderFields(props.formCreditFields, 'formCreditFields') }
      <Form.Field
        control={TextArea}
        label='Description'
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
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
