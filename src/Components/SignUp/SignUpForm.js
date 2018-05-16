import React from "react";
import api from "../API/api";
import { connect } from "react-redux";
import { Accordion, Button, Checkbox, Form } from "semantic-ui-react";
import panels from "./InitialEntry";
import { fetchUserData } from "../../Actions/fetchUserData";

const SignUpForm = props => {
  let formInput = {};

  const handleSubmit = event => {
    event.preventDefault();
    api.auth.signUserUp(formInput.email, formInput.password).then(user => {
      if (user.error) {
        console.log("ERROR");
      } else {
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
      <Form.Field required>
        <label>Email</label>
        <input
          name="email"
          placeholder="email"
          value={formInput.email}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field required>
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="password"
          value={formInput.password}
          onChange={handleChange}
        />
      </Form.Field>

      <Accordion as={Form.Field} panels={panels} />
      <Form.Field required>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button type="submit">Create Account</Button>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    // agreedToTerms: state.formValidity.signUpForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserData: userId => {
      dispatch(fetchUserData(userId));
    },
    // termsAgreementInit: () => {
    //   dispatch({ type: 'TERMS_AGREEMENT_INIT' })
    // },
    // fetchUsersInformation: (userId) => {
    //   dispatch({ type: 'FETCH_USERS_INFORMATION', userId })
    // },
    signUserIn: userInfo => {
      // console.log(userInfo);
      dispatch({ type: "SIGN_USER_IN", userInfo });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
