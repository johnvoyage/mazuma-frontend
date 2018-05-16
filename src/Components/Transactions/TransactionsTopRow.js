import React from "react";
import { Button, Checkbox } from "semantic-ui-react";
import { connect } from "react-redux";
import { resetTransactions } from "./NewTransactionSubmitted";

const SelectedFilters = props => {
  const handleClick = event => {
    const eventName = event.target.name;
    props.toggleTransactionPrimaryRow(eventName);
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
            slider
            name="showFilters"
            label="Show filters"
            checked={props.showFilters}
            onChange={handleChange}
          />
          {"  "}
          <Checkbox
            slider
            name="showDescriptions"
            label="Show descriptions"
            checked={props.showDescriptions}
            onChange={handleChange}
          />
          {"  "}
          <Checkbox
            slider
            name="showEditDelete"
            label="Show edit/delete"
            checked={props.showEditDelete}
            onChange={handleChange}
          />
          {"  "}
          <Button
            onClick={props.resetFilters}
            size="mini"
            content="Reset filters"
            floated="right"
          />
          <br />
          <br />
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    topRow: state.transactionContainer.topRow,
    showFilters: state.transactionContainer.showFilters,
    showDescriptions: state.transactionContainer.showDescriptions,
    showEditDelete: state.transactionContainer.showEditDelete
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTransactionSecondaryRow: checkBox => {
      dispatch({ type: "TOGGLE_TRANSACTION_SECONDARY_ROW", checkBox });
    },
    resetFilters: () => {
      dispatch({ type: "RESET_TRANSACTION_FILTER" });
    },
    toggleTransactionPrimaryRow: topRow => {
      dispatch({ type: "TOGGLE_TRANSACTION_PRIMARY_ROW", topRow });
    },

    updateTransactionBalance: transactionBalance => {
      dispatch({ type: "UPDATE_TRANSACTION_BALANCE", transactionBalance });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilters);
