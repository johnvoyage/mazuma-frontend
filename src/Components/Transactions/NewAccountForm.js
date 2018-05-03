import React from "react";
import { Segment, Form, Select, TextArea, Header } from "semantic-ui-react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { fetchUserData } from "../../Actions/fetchUserData";
import { accountSubcategoryOptions } from "../../StaticOptions/subcategories";
import { createAccount } from "../API/accounts";

const NewAccountForm = props => {
  // const handleChange = event => {
  //   debugger;
  //   const formKey = event.target.name
  //     ? event.target.name
  //     : event.target.id
  //       ? event.target.id
  //       : event.target.parentElement.parentElement.parentElement.id;
  //   const formValue = event.target.value
  //     ? event.target.value
  //     : event.target.innerText
  //       ? event.target.innerText
  //       : event.target.parentElement[0].innerText;
  //   // console.log(event.target.name);
  //   // console.log(event.target.value);
  //   props.updateForm(formKey, formValue);
  //   // console.log(props.formInput);
  // };

  const handleSubmit = event => {
    event.preventDefault();
    // debugger;
    const accountName =
      event.target.children[0].children[0].children[1].children[0].value;
    const description = event.target.children[1].children[1].value;
    const subcategoryName =
      event.target.children[0].children[1].children[1].children[0].innerText;
    const subcategoryId = subcategoryNameToId(
      subcategoryName
      // accountSubcategoryOptions
    );
    createAccount(accountName, description, subcategoryId, props.userId).then(
      json => {
        console.log(json);
        // response.json();
      }
    );
    event.target.reset();

    // props.accountSubmitted(
    //   accountName,
    //   description,
    //   subcategoryId,
    //   props.userId
    // );
    // props.clearFormInput()
    // props.updateUserData(props.userId);
  };

  const subcategoryNameToId = subcategoryName => {
    // debugger;
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
            // onChange={handleChange}
            required
            // name="newAccountFormAccountName"
            fluid
            id="form-subcomponent-shorthand-input-first-name"
            label="Account name"
            placeholder="Account name"
          />
          <Form.Field
            required
            // id="newAccountFormSubcategoryName"
            control={Select}
            // onChange={handleChange}
            label="What kind of account is it?"
            options={accountSubcategoryOptions}
            placeholder="Subcategory"
          />
        </Form.Group>
        <Form.Field
          // onChange={handleChange}
          // name="newAccountFormDescription"
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
    // changeFormFields: (whichForm, amount) => {
    //   dispatch({ type: "CHANGE_TRANSACTION_FORM_FIELDS", whichForm, amount });
    // },
    // accountSubmitted: () => {
    //   dispatch({ type: "TRANSACTION_SUBMITTED" });
    // },
    // updateForm: (formKey, formValue) => {
    //   dispatch({ type: "UPDATE_FORM", formKey, formValue });
    // }
    // updateUserData: userId => {
    //   bindActionCreators(fetchUserData(userId), dispatch);
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewAccountForm);
