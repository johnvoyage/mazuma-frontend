import React from "react";
import { Button, Checkbox } from "semantic-ui-react";
import { connect } from "react-redux";
import { resetTransactions } from "./NewTransactionSubmitted";

const SelectedFilters = props => {
  // <Button
  //   toggle
  //   active={props.descriptionToggle}
  //   onClick={props.toggleTransactionDescription}
  //   content="Descriptions"
  // />
  //   <Button
  //     toggle
  //     name="none"
  //     active={props.filterSelected === "none"}
  //     content="No Filters"
  //     onClick={props.toggleTransactionFilter}
  //   />
  //   <Button
  //     toggle
  //     name="quick"
  //     active={props.filterSelected === "quick"}
  //     content="Quick Filters"
  //     onClick={props.toggleTransactionFilter}
  //   />
  //   <Button
  //     toggle
  //     name="custom"
  //     active={props.filterSelected === "custom"}
  //     content="Custom Filters"
  //     onClick={props.toggleTransactionFilter}
  //   />

  const handleClick = event => {
    const eventName = event.target.name;
    props.toggleTransactionPrimaryRow(eventName);
    // console.log(event.target.name);
  };

  const handleChange = event => {
    const eventName = event.target.parentElement.children[0].name;
    props.toggleTransactionSecondaryRow(eventName);
  };

  return (
    <div>
      <Button.Group attached="top">
        <Button
          name="view transactions"
          toggle
          active={props.topRow === "view transactions"}
          onClick={handleClick}
          content="View Transactions"
        />
        <Button
          name="new transaction"
          toggle
          active={props.topRow === "new transaction"}
          onClick={event => {
            handleClick(event);
            // props.toggleNewTransaction();
            // props.updateTransactionBalance(0);
            resetTransactions();
          }}
          content="New Transaction"
        />
        <Button
          name="new account"
          toggle
          active={props.topRow === "new account"}
          onClick={handleClick}
          content="New Account"
        />
      </Button.Group>
      {props.topRow === "view transactions" ? (
        <div>
          <br />
          <Checkbox
            name="showFilters"
            label="Show filters"
            checked={props.showFilters}
            onChange={handleChange}
          />
          {"  "}
          <Checkbox
            name="showDescriptions"
            label="Show descriptions"
            checked={props.showDescriptions}
            onChange={handleChange}
          />
          {"  "}
          <Checkbox
            name="showEditDelete"
            label="Show edit/delete"
            checked={props.showEditDelete}
            onChange={handleChange}
          />
          {"  "}
          <Button size="mini" content="Clear filters" />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // descriptionToggle: state.transactionContainer.descriptionToggle,
    // newTransaction: state.transactionContainer.newTransaction,
    // newAccount: state.transactionContainer.newAccount,
    // filterSelected: state.transactionContainer.filterSelected
    topRow: state.transactionContainer.topRow,
    showFilters: state.transactionContainer.showFilters,
    showDescriptions: state.transactionContainer.showDescriptions,
    showEditDelete: state.transactionContainer.showEditDelete
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // toggleTransactionDescription: () => {
    //   dispatch({ type: "TOGGLE_TRANSACTION_DESCRIPTION" });
    // },

    toggleTransactionSecondaryRow: checkBox => {
      dispatch({ type: "TOGGLE_TRANSACTION_SECONDARY_ROW", checkBox });
    },
    // toggleTransactionFilter: event => {
    //   dispatch({
    //     type: "TOGGLE_TRANSACTION_FILTER",
    //     filterSelected: event.target.name
    //   });
    // },
    // toggleNewTransaction: () => {
    //   dispatch({ type: "TOGGLE_NEW_TRANSACTION" });
    // },
    // toggleNewAccount: () => {
    //   dispatch({ type: "TOGGLE_NEW_ACCOUNT" });
    // },
    toggleTransactionPrimaryRow: topRow => {
      dispatch({ type: "TOGGLE_TRANSACTION_PRIMARY_ROW", topRow });
    },

    updateTransactionBalance: transactionBalance => {
      // debugger
      // console.log(transactionBalance)
      dispatch({ type: "UPDATE_TRANSACTION_BALANCE", transactionBalance });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilters);
