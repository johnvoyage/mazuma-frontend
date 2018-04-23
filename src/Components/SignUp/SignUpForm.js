import React from 'react';
import api from '../API/api';
import { connect } from 'react-redux'
import { Button, Checkbox, Form } from 'semantic-ui-react';


const SignUpForm = (props) => {


  let formInput = {}

  const handleSubmit = (event) => {
    event.preventDefault()
    api.auth
      .signUserUp(formInput.email, formInput.password, formInput.tickerSymbol)
      .then(json => {
        if (json.error) {
          console.log("ERROR")
        } else {
          props.logUserIn(json)
        }
      })
  }

  const handleChange = (event) => {
    formInput = { ...formInput, [event.target.name]: event.target.value }
  }

  return(
    <Form
      onSubmit={ handleSubmit }
    >
      <Form.Field
        required
      >
        <label>Email</label>
        <input
          name='email'
          placeholder='email'
          value={ formInput.email }
          onChange={ handleChange }
        />
      </Form.Field>
      <Form.Field
        required
      >
        <label>Password</label>
        <input
          name='password'
          type='password'
          placeholder='password'
          value={ formInput.password }
          onChange={ handleChange }
        />
      </Form.Field>
      <Form.Field>
        <label>Ticker Symbol</label>
        <input
          name='ticker symbol'
          placeholder='ticker symbol'
          value={ formInput.password }
          onChange={ handleChange }
        />
      </Form.Field>
      <Form.Field required>
        <Checkbox
          label='I agree to the Terms and Conditions'
          onChange={ props.toggleTermsAgreement }
        />
      </Form.Field>
      <Button
        type='submit'
        disabled={ !props.agreedToTerms }
      >
        Create Account
      </Button>
    </Form>
  )

}

const mapStateToProps = (state) => {
  return {
    agreedToTerms: state.userInfo.agreedToTerms
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTermsAgreement: () => {
      dispatch({ type: 'TOGGLE_TERMS_AGREEMENT' })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm)
