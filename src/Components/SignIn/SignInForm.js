import React from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import api from '../API/api';

const SignInForm = (props) => {

  let formInput = {}
  // let inputErrors = {}

  const handleSubmit = (event) => {
    event.preventDefault()
    api.auth
      .login(formInput.email, formInput.password)
      .then(json => {
        // console.log(json)
        if (json.error) {
          console.log("ERROR")
        } else {
          props.logUserIn(json)
        }
      })
  }

  const handleChange = (event) => {
    formInput = { ...formInput, [event.target.name]: event.target.value }
    // console.log(formInput)
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
const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
    // activeMenuItem: state.activeMenuItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    // changeLogInStatus: () => {
    //   dispatch({ type: 'CHANGE_LOG_IN_STATUS'})
    // },

    logUserIn: (userInfo) => {
      console.log(userInfo)
      dispatch({ type: 'LOG_USER_IN', userInfo})
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
