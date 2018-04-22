import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import api from '../API/api';

const SignInForm = () => {

  let formInput = {}

  const handleSubmit = (event) => {
    event.preventDefault()
    api.auth
      .login(formInput.email, formInput.password)
      .then(json => {
        console.log(json)
      })
  }

  const handleChange = (event) => {
    formInput = { ...formInput, [event.target.name]: event.target.value }
    console.log(formInput)
  }

  return(
    <Form
      onSubmit={ handleSubmit }
    >
      <Form.Field>
        <label>Email</label>
        <input
          name='email'
          placeholder='email'
          value={formInput.email}
          onChange={ handleChange }
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          name='password'
          type='password'
          placeholder='password'
          value={formInput.password}
          onChange={ handleChange }

        />
      </Form.Field>
      <Button type='submit'>Sign In</Button>
    </Form>
  )
}

export default SignInForm
