import React from "react";
import { Segment, Form, Select, TextArea } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchAccounts } from "../../Actions/fetchAccounts";
import { accountSubcategoryOptions } from "../../StaticOptions/subcategories";
import { createAccount } from "../API/accounts";
const NewAccountForm = props => {
  const handleChange = event => {
    // debugger;
    const formKey = event.target.name
      ? event.target.name
      : event.target.parentElement.parentElement.id;
    const formValue = event.target.value
      ? event.target.value
      : event.target.children[0].innerText;
    // console.log(event.target.name);
    // console.log(event.target.value);
    props.updateForm(formKey, formValue);
    // console.log(props.formInput);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const accountName = props.formInput.newAccountFormAccountName;
    const description = props.formInput.newAccountFormDescription;
    const subcategoryName = props.formInput.newAccountFormSubcategoryName;
    const subcategoryId = subcategoryNameToId(subcategoryName);
    createAccount(accountName, description, subcategoryId, props.userId);
    console.log("here");

    // props.clearFormInput()
  };

  const subcategoryNameToId = subcategoryName => {
    return parseInt(
      accountSubcategoryOptions.filter(subcategory => {
        return subcategory.text === subcategoryName;
      })[0].key
    );
  };

  return (
    <Segment>
      <h1>New Account</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            onChange={handleChange}
            required
            name="newAccountFormAccountName"
            fluid
            id="form-subcomponent-shorthand-input-first-name"
            label="Account name"
            placeholder="Account name"
          />
          <Form.Field
            required
            id="newAccountFormSubcategoryName"
            control={Select}
            onChange={handleChange}
            label="What kind of account is it?"
            options={accountSubcategoryOptions}
            placeholder="Subcategory"
          />
        </Form.Group>
        <Form.Field
          onChange={handleChange}
          name="newAccountFormDescription"
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
    changeFormFields: (whichForm, amount) => {
      dispatch({ type: "CHANGE_TRANSACTION_FORM_FIELDS", whichForm, amount });
    },
    // accountSubmitted: () => {
    //   dispatch({ type: "TRANSACTION_SUBMITTED" });
    // },
    updateForm: (formKey, formValue) => {
      dispatch({ type: "UPDATE_FORM", formKey, formValue });
    },

    accountSubmitted: bindActionCreators(fetchAccounts(), dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewAccountForm);
