import React from "react";
import { Segment, Form, Select, TextArea, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchUserData } from "../../Actions/fetchUserData";
import { accountSubcategoryOptions } from "../../StaticOptions/subcategories";
import { createAccount } from "../API/accounts";

const NewAccountForm = props => {
  const handleSubmit = event => {
    event.preventDefault();
    const accountName =
      event.target.children[0].children[0].children[1].children[0].value;
    const description = event.target.children[1].children[1].value;
    const subcategoryName =
      event.target.children[0].children[1].children[1].children[0].innerText;
    const subcategoryId = subcategoryNameToId(subcategoryName);
    createAccount(accountName, description, subcategoryId, props.userId).then(
      json => {
        console.log(json);
        props.fetchUserData(props.userId);
      }
    );
    event.target.reset();
  };

  const subcategoryNameToId = subcategoryName => {
    return parseInt(
      accountSubcategoryOptions.filter(subcategory => {
        return subcategory.text === subcategoryName;
      })[0].key,
      10
    );
  };

  return (
    <Segment>
      <Header as="h1" textAlign="center" content="New Account" />

      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            required
            fluid
            id="form-subcomponent-shorthand-input-first-name"
            label="Account name"
            placeholder="Account name"
          />
          <Form.Field
            required
            control={Select}
            label="What kind of account is it?"
            options={accountSubcategoryOptions}
            placeholder="Subcategory"
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="Description"
          placeholder="Checking account ending #1234"
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    </Segment>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.userInfo.id,
    formInput: state.formInput
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserData: userId => {
      dispatch(fetchUserData(userId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewAccountForm);
