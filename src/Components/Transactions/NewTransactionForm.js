import React from "react";
import {
  Input,
  Select,
  Form,
  TextArea,
  Button,
  Segment
} from "semantic-ui-react";
import { connect } from "react-redux";
import {
  newTransactionSubmitted,
  updateDebitBalance,
  updateCreditBalance,
  removeAmount,
  calcDebitBalance,
  calcCreditBalance
} from "./NewTransactionSubmitted";
import { bindActionCreators } from "redux";
import { fetchTransactions } from "../../Actions/fetchTransactions";

const NewTransactionForm = props => {
  const renderFields = (numOfFields, formType) => {
    let fieldName;
    formType === "formCreditFields" ? (fieldName = "cr") : (fieldName = "db");
    let formFields = [];
    for (let i = 0; i < numOfFields; i++) {
      formFields.push(
        <Form.Group inline key={i}>
          <Form.Field
            name={`${fieldName}${i + 1}`}
            type="number"
            step="0.01"
            min={fieldName === "cr" ? null : "0.01"}
            max={fieldName === "cr" ? "-0.01" : null}
            required
            label="Value"
            onChange={event => {
              fieldName === "db"
                ? updateDebitBalance(event)
                : updateCreditBalance(event);
              props.updateTransactionBalance(
                calcCreditBalance() + calcDebitBalance()
              );
            }}
            control={Input}
            placeholder="$ amount"
          />
          <Form.Field
            label="Account"
            required
            control={Select}
            options={options}
            placeholder="Select one"
          />
          {i === numOfFields - 1 ? (
            <div>
              <Button
                id={`${fieldName}${i + 1}`}
                disabled={numOfFields === 1}
                onClick={event => {
                  removeAmount(event);
                  props.updateTransactionBalance(
                    calcCreditBalance() - calcDebitBalance()
                  );

                  props.changeFormFields(formType, -1);
                }}
                icon="minus circle"
              />
              <Button
                onClick={() => props.changeFormFields(formType, 1)}
                icon="add circle"
              />
            </div>
          ) : null}
        </Form.Group>
      );
    }
    return formFields;
  };

  const options = props.accounts.map((account, index) => {
    return {
      key: index,
      text: account.name,
      value: account.name
    };
  });

  return (
    <Segment>
      <h1>New Transaction</h1>
      <Form
        onSubmit={event => {
          newTransactionSubmitted(event, props.userId);
          props.transactionSubmitted();
          props.getTransactions(props.userId);
        }}
      >
        <Form.Field
          required
          name="date"
          type="date"
          control={Input}
          label="Date"
          width={5}
          // onChange={handleChange}
        />
        <h3>What you received:</h3>
        {renderFields(props.formDebitFields, "formDebitFields")}
        <h3>Subtotal: &emsp; $ {calcDebitBalance().toFixed(2)}</h3>
        <h3>What you gave (enter as a negative):</h3>
        {renderFields(props.formCreditFields, "formCreditFields")}
        <h3>Subtotal: &emsp; $ {calcCreditBalance().toFixed(2)}</h3>
        {props.transactionBalance !== 0 ? (
          <h4 id="out-of-bal">
            Currently out of balance by: &emsp; ${" "}
            {Math.abs(props.transactionBalance).toFixed(2)}{" "}
          </h4>
        ) : null}

        <Form.Field
          name="description"
          control={TextArea}
          label="Description"
          placeholder="Made a grocery trip to Rite Aid, split 50/25/25 between household supplies, food, and medicine"
        />
        <Form.Field disabled={props.transactionBalance !== 0} control={Button}>
          Submit
        </Form.Field>
      </Form>
    </Segment>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.userInfo.id,
    formDebitFields: state.transactionContainer.formDebitFields,
    formCreditFields: state.transactionContainer.formCreditFields,
    transactionBalance: state.transactionContainer.transactionBalance,
    accounts: state.userInfo.accounts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFormFields: (whichForm, amount) => {
      dispatch({ type: "CHANGE_TRANSACTION_FORM_FIELDS", whichForm, amount });
    },
    updateTransactionBalance: transactionBalance => {
      dispatch({ type: "UPDATE_TRANSACTION_BALANCE", transactionBalance });
    },
    transactionSubmitted: () => {
      dispatch({ type: "TRANSACTION_SUBMITTED" });
    }
    // getTransactions: bindActionCreators(fetchTransactions, dispatch)
    // addNewAccountOn: () => {
    //   dispatch({ type: 'ADD_NEW_ACCOUNT_ON' })
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTransactionForm);
