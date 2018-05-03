import React from "react";
import { connect } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import api from "../API/api";
import { fetchUserData } from "../../Actions/fetchUserData";

// import fetchUsersInformation from '../UserAccount/FetchUsersData';

const SignInForm = props => {
  let formInput = {};

  const handleSubmit = event => {
    event.preventDefault();
    api.auth.login(formInput.email, formInput.password).then(user => {
      if (user.error) {
        console.log("ERROR");
      } else {
        // console.log('...')

        // fetchUsersInformation(user.id)
        props.fetchUserData(user.id);
        props.signUserIn(user);
      }
    });
  };

  const handleChange = event => {
    formInput = {
      ...formInput,
      [event.target.name]: event.target.value
    };
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Email</label>
        <input
          name="email"
          placeholder="email"
          value={formInput.email}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="password"
          value={formInput.password}
          onChange={handleChange}
        />
      </Form.Field>
      <Button type="submit">Sign In</Button>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // fetchUsersInformation: (userId) => {
    //   dispatch({ type: 'FETCH_USERS_INFORMATION', userId })
    // },
    fetchUserData: userId => {
      dispatch(fetchUserData(userId));
    },
    signUserIn: userInfo => {
      localStorage.setItem("token", userInfo.jwt);
      dispatch({ type: "SIGN_USER_IN", userInfo });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
