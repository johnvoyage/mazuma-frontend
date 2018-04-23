import React from 'react';
import api from '../API/api';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const SignUpForm = (props) => {

  let formInput = {}

  const handleSubmit = (event) => {
    event.preventDefault()
    api.auth
      .login(formInput.email, formInput.password)
      .then(json => {
        if (json.error) {
          console.log("ERROR")
        } else {
          props.logUserIn(json)
        }
      })
  }
  return(
    <Form>
      <Form.Field>
        <label>Email</label>
        <input placeholder='email' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='password' />
      </Form.Field>
      <Form.Field>
        <label>Ticker Symbol</label>
        <input placeholder='ticker symbol' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Create Account</Button>
    </Form>
  )

}

export default SignUpForm
