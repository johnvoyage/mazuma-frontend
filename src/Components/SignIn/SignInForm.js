import React from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import api from '../API/api';

const SignInForm = (props) => {

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

  const handleChange = (event) => {
    formInput = { ...formInput, [event.target.name]: event.target.value }
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
          value={ formInput.password }
          onChange={ handleChange }
        />
      </Form.Field>
      <Button type='submit'>Sign In</Button>
    </Form>
  )
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logUserIn: (userInfo) => {
      localStorage.setItem('token', userInfo.jwt)
      dispatch({ type: 'LOG_USER_IN', userInfo})
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
